import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import api from '../../service/api'

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

    useEffect(async () => {
        await api.get(`/accounts/${2}/collaborators/details`).then(async (res) => {

            const plancon = res.data.usersPlancon
            const rm = res.data.usersRm

            const newInfos = [ ...plancon, ...rm ]        


            newInfos.map(async data => {
                const nameLocation = () => api.get(`/locations/find/2`).then((res) => res.data.name)

                console.log(await nameLocation())

                data.location_id = await nameLocation()

                console.log(data)
            })

            return setInfos(newInfos)    
        })   
    }, [])

    return (
        
        <Container>
            <Header title={`Essas são as movimentações de ${location.state.name}.`} back="/colaboradores"/>
            <Wrapper>
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
                                <BodyDateDetails>{
                                    new Date(data.date).toLocaleDateString("pt-BR",{ year: 'numeric', month: '2-digit', day: '2-digit' })}
                                </BodyDateDetails>
                                {data.rm ? (<BodyMoves>Criação de RM</BodyMoves>) : (<BodyMoves>Criação de Plancon</BodyMoves>)}
                                <BodyLocation>{data.location_id}</BodyLocation>
                                {data.rm ? (<BodyIdentifier>{data.rm}</BodyIdentifier>) : (<BodyIdentifier>{data.id}</BodyIdentifier>)}
                                <BodyIconGroup><IconEye /><IconPrinter /><IconPDF /></BodyIconGroup>
                            </BodyTable>
                        </>
                    ))}                 
                </WrapperTable>
            </Wrapper>
        </Container>
    )
}

export default CollabDetails