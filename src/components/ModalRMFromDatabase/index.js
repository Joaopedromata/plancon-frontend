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
    TitleElementsIcons,
    ElementsTableData,
    ElementsSAP,
    ElementsDescription,
    ElementsUnit,
    ElementsQuantity
} from './styles'


const ModalRM = ({ id = 'modal', onClose = () => {}, identifier }) => {

    const [ fillTable, setFillTable ] = useState([])
    const [ dateRm, setDateRm ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ city, setCity ] = useState('')
    const [ uf, setUf ] = useState('')
    const [ identifierRm, setIdentifierRm ] = useState()

    useEffect(() => {
        
        api.get(`/storages/inputs/${identifier}`).then((res) => {
            setFillTable(res.data.inputs)
            setDateRm(res.data.date)
            setIdentifierRm(res.data.rm)
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
                    <DateCase>{new Date('2020-04-04T00:00:00.000Z').toLocaleDateString("pt-BR",{ year: 'numeric', month: '2-digit', day: '2-digit' })}</DateCase><Location>{location} - {city}/{uf}</Location><Identifier>RM {identifierRm}</Identifier>
                </HeaderWrapper>
                <Table>
                    {console.log(fillTable)}
                    {fillTable.length === 0 ? (null) : (
                        <WrapperTables>
                            <TableData>
                                <TitleElementsSAP>SAP</TitleElementsSAP>
                                <TitleElementsDescription>Descrição</TitleElementsDescription>
                                <TitleElementsUnit>UND</TitleElementsUnit>
                                <TitleElementsQuantity>Quantidade</TitleElementsQuantity>
                                <TitleElementsIcons></TitleElementsIcons>
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
                                </ElementsTableData>
                            </WrapperElements>
                        </>
                    ))}
                </Table>       
            </Wrapper>
        </Container>
    )
}

export default ModalRM 