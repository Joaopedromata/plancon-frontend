import React from 'react'
import {
    Container,
    MiniWrapper,
    Wrapper,
    HeaderWrapper,
    Date,
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
    TitleElementsIcons,
    ElementsTableData,
    ElementsSAP,
    ElementsDescription,
    ElementsUnit,
    ElementsQuantity,
    ElementsIdentifier
} from './styles'

const ModalPlancon = ({ id = 'modal', onClose = () => {}, infos, cities, date, identifier}) => {
    
    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }

    const changeDate = (value) =>{	
        return value.split('-').reverse().join('/')
    }

    const convertDate = changeDate(date)
    
    const fillTable = infos

    return (
        <Container id={id} onClick={handleOutsideClick}>
            <MiniWrapper>
                <Printer /><PDF />
            </MiniWrapper>
            <Wrapper>
                <HeaderWrapper>
                <Date>{convertDate}</Date><Location>{cities.name} - {cities.city}/{cities.uf}</Location><Identifier>Plancon {identifier}</Identifier>
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
                                    <ElementsSAP>{products.sap}</ElementsSAP>
                                    <ElementsDescription>{products.description}</ElementsDescription>
                                    <ElementsUnit>{products.unit}</ElementsUnit>
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

export default ModalPlancon