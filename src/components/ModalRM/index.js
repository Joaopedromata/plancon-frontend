import React from 'react'
import {
    Container,
    MiniWrapper,
    Wrapper,
    HeaderWrapper,
    Table

} from './styles'

const ModalRM = ({ id = 'modal', onClose = () => {} }) => {
  
    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }
    
    
    return (
        <Container id={id} onClick={handleOutsideClick}>
            <MiniWrapper>
                
            </MiniWrapper>
            <Wrapper>
                <HeaderWrapper></HeaderWrapper>
                <Table>
                    {/* {fillTable.length === 0 ? (null) : (
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
                            <ElementsTableData>
                                <ElementsSAP>{products.sap}</ElementsSAP>
                                <ElementsDescription>{products.description}</ElementsDescription>
                                <ElementsUnit>{products.unit}</ElementsUnit>
                                <ElementsQuantity>{products.quantity}</ElementsQuantity>
                                <ElementsIcons><Edit onClick={() => handleEditProduct(products.sap)}/><Remove onClick={() => handleRemoveProduct(products.sap)}/></ElementsIcons>
                            </ElementsTableData>
                        </>
                    ))} */}
                </Table>       
            </Wrapper>
        </Container>
    )
}

export default ModalRM