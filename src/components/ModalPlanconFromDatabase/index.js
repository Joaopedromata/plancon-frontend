import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import {
    Container,
    MiniWrapper,
    Wrapper,
    HeaderWrapper,
    DateCase,
    Location,
    Identifier,
    Table,
    Printer,
    PDF,
    WrapperTables,
    WrapperElements,
    TableData,
    TitleElementsSAP,
    TitleElementsDescription,
    TitleElementsUnit,
    TitleElementsQuantity,
    TitleElementsIdentifier,
    ElementsTableData,
    ElementsSAP,
    ElementsDescription,
    ElementsUnit,
    ElementsQuantity,
    ElementsIdentifier
} from './styles'


const ModalPlanconFromDatabase = ({ id = 'modal', onClose = () => {}, identifier }) => {

    const [ fillTable, setFillTable ] = useState([])
    const [ datePlancon, setDatePlancon ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ city, setCity ] = useState('')
    const [ uf, setUf ] = useState('')
    const [ identifierPlancon, setIdentifierPlancon ] = useState()

    useEffect(() => {
        
        api.get(`/storages/outputs/${identifier}`).then((res) => {
            console.log(res.data)
            setFillTable(res.data.outputs)
            setDatePlancon(res.data.date)
            setIdentifierPlancon(res.data.id)
            setCity(res.data.location.city.name)
            setLocation(res.data.location.name)
            setUf(res.data.location.city.uf)
        })
        
    }, [])
  
    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }

    
    return (
        <Container id={id} onClick={handleOutsideClick}>
            <MiniWrapper>
                <Printer /><PDF />
            </MiniWrapper>
            <Wrapper>
                <HeaderWrapper>
                    <DateCase>{new Date(datePlancon).toLocaleDateString("pt-BR",{ year: 'numeric', month: '2-digit', day: '2-digit' })}</DateCase><Location>{location} - {city}/{uf}</Location><Identifier>Plancon {identifierPlancon}</Identifier>
                </HeaderWrapper>
                <Table>
                    {fillTable.length === 0 ? (null) : (
                        <WrapperTables>
                            <TableData>
                                <TitleElementsSAP>SAP</TitleElementsSAP>
                                <TitleElementsDescription>Descrição</TitleElementsDescription>
                                <TitleElementsUnit>UND</TitleElementsUnit>
                                <TitleElementsQuantity>Quantidade</TitleElementsQuantity>
                                <TitleElementsIdentifier>Lote</TitleElementsIdentifier>
                            </TableData>
                        </WrapperTables>
                    )}
                    
                    {fillTable.map(products => (
                        <>
                            <hr />
                            <WrapperElements>
                                <ElementsTableData>
                                    <ElementsSAP>{products.product.sap}</ElementsSAP>
                                    <ElementsDescription>{products.product.description}</ElementsDescription>
                                    <ElementsUnit>{products.product.unit.name}</ElementsUnit>
                                    <ElementsQuantity>{products.quantity}</ElementsQuantity>
                                    <ElementsIdentifier>{products.identifier}</ElementsIdentifier>
                                </ElementsTableData>
                            </WrapperElements>
                        </>
                    ))}
                </Table>       
            </Wrapper>
        </Container>
    )
}

export default ModalPlanconFromDatabase 