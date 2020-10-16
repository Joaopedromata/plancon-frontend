import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import api from '../../service/api'
import NoneMessage from '../../components/NoneMessage'
import ModalRmFromDatabase from '../../components/ModalRMFromDatabase'

import {
    Container,
    Wrapper,
    WrapperTable,
    HeaderTable,
    HeaderDateDetails,
    HeaderMoves,
    HeaderLocation,
    HeaderIdentifier,
    BodyTable,
    BodyDateDetails,
    BodyMoves,
    BodyLocation,
    BodyIdentifier,
    BodyIconGroup,
    IconEye,
    IconPrinter,
    IconPDF
} from './styles'

const CollabDetails = ({ location }) => {

    const [ infos, setInfos ] = useState([])
    const [ isModalRmVisible, setIsModalRmVisible ] = useState(false)
    const [ identifier, setIdentifier ] = useState()

    useEffect(() => {
        api.get(`/accounts/${location.state.id}/collaborators/details`).then((res) => {

            const plancon = res.data.usersPlancon
            const rm = res.data.usersRm

            return setInfos([ ...plancon, ...rm ])  
        })   
    }, [])

    const handleEyeClick = (id) => {
        setIsModalRmVisible(true)
        setIdentifier(id)
    }

    


    return (
        <Container>
            <Header title={`Essas são as movimentações de ${location.state.name}.`} back="/colaboradores"/>
            <Wrapper>
                {infos.length > 0 ? (
                    <WrapperTable>
                        <HeaderTable>
                            <HeaderDateDetails>Data</HeaderDateDetails>
                            <HeaderMoves>Movimentações</HeaderMoves>
                            <HeaderLocation>Obra</HeaderLocation>
                            <HeaderIdentifier>ID</HeaderIdentifier>
                        </HeaderTable>
                        {infos.map(data => (
                            <>
                                <hr key={data.id}/>
                                <BodyTable> 
                                    <BodyDateDetails>{new Date(data.date).toLocaleDateString("pt-BR",{ year: 'numeric', month: '2-digit', day: '2-digit' })}
                                    </BodyDateDetails>
                                    {data.rm ? (<BodyMoves>Criação de RM</BodyMoves>) : (<BodyMoves>Criação de Plancon</BodyMoves>)}
                                    <BodyLocation>{data.location.name}</BodyLocation>
                                    {data.rm ? (<BodyIdentifier>{data.rm}</BodyIdentifier>) : (<BodyIdentifier>{data.id}</BodyIdentifier>)}
                                    <BodyIconGroup>
                                        <IconEye onClick={data.rm ? () => handleEyeClick(data.id) : 'oi'}/>
                                        <IconPrinter />
                                        <IconPDF />
                                    </BodyIconGroup>
                                </BodyTable>
                            </>
                        ))}                 
                    </WrapperTable>
                ) : <NoneMessage text="Nenhum registro encontrado para este colaborador."/>}
               
            </Wrapper>
            {isModalRmVisible && <ModalRmFromDatabase 
                                    onClose={() => setIsModalRmVisible(false)}
                                    identifier={identifier}
                                />
            }
        </Container>
    )
}

export default CollabDetails