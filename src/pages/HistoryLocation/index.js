import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ModalPlanconFromDatabase from '../../components/ModalPlanconFromDatabase'
import ModalRMFromDatabase from '../../components/ModalRMFromDatabase'
import api from '../../service/api'
import {
    Container,
    Wrapper,
    Table,
    HeaderTable,
    ElementsDate,
    ElementsMoves,
    ElementsIdentifier,
    ElementsIcons,
    BodyTable,
    IconEye,
    IconPrinter,
    IconPDF
} from './styles'


const HistoryLocation = ({ location }) => {

    const [ infos, setInfos ] = useState([])
    const [ isModalRmVisible, setIsModalRmVisible ] = useState(false)
    const [ isModalPlanconVisible, setIsModalPlanconVisible ] = useState(false)
    const [ identifier, setIdentifier ] = useState()

    const handleEyeClickRm = (id) => {
        setIsModalRmVisible(true)
        setIdentifier(id)
    }

    const handleEyeClickPlancon = (id) => {
        setIsModalPlanconVisible(true)
        setIdentifier(id)
    }  

    useEffect(() => {
        api.get(`/locations/history/${location.state.id}`).then((res) => {

            const plancon = res.data.plancons
            const rm = res.data.rms

            return setInfos([ ...plancon, ...rm ])

        })
    }, [])





    return (
        <Container>
            <Header title={`Aqui estão as movimentações na obra ${location.state.name}`} back="/estoque" infosBack={location.state}/>
            <Wrapper>
                <Table>
                    <HeaderTable>
                        <ElementsDate>Data</ElementsDate>
                        <ElementsMoves>Movimentações</ElementsMoves>
                        <ElementsIdentifier>ID</ElementsIdentifier>
                        <ElementsIcons></ElementsIcons>
                    </HeaderTable>
                    {infos.map(data => (
                        <>
                            <hr />
                            <BodyTable>
                                <ElementsDate>{new Date(data.date).toLocaleDateString("pt-BR",{ year: 'numeric', month: '2-digit', day: '2-digit' })}</ElementsDate>
                                {data.rm ? (<ElementsMoves>Criação de RM</ElementsMoves>) : (<ElementsMoves>Criação de Plancon</ElementsMoves>)}
                                {data.rm ? (<ElementsIdentifier>{data.rm}</ElementsIdentifier>) : (<ElementsIdentifier>{data.id}</ElementsIdentifier>)}
                                <ElementsIcons>
                                    <IconEye onClick={data.rm ? () => handleEyeClickRm(data.id) : () => handleEyeClickPlancon(data.id)}/>
                                    <IconPrinter />
                                    <IconPDF />
                                </ElementsIcons>
                            </BodyTable>
                        </>
                    ))}
                </Table>
            </Wrapper>
            {isModalRmVisible && <ModalRMFromDatabase 
                                    onClose={() => setIsModalRmVisible(false)}
                                    identifier={identifier}
                                />
            }
            {isModalPlanconVisible && <ModalPlanconFromDatabase 
                                    onClose={() => setIsModalPlanconVisible(false)}
                                    identifier={identifier}
                                />
            }
        </Container>
    )
}

export default HistoryLocation