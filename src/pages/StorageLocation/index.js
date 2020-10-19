import React from 'react'
import {
    Container,
    WrapperTable,
    Table,
    HeaderTable,
    ElementsSap,
    ElementsDescription,
    ElementsCategory,
    ElementsUnit,
    ElementsQuantity,
    BodyTable
} from './styles'
import Header from '../../components/Header'

const Storage = () => {
    return (
        <Container>
            <Header title="Esses são os materiais disponíveis na obra VNO" back="/estoque">
                <WrapperTable>
                    {/* <Table>
                        <HeaderTable>
                            <ElementsSap>SAP</ElementsSap>
                            <ElementsDescription>Descrição</ElementsDescription>
                            <ElementsCategory>Categoria</ElementsCategory>
                            <ElementsUnit>UND</ElementsUnit>
                            <ElementsQuantity>Quantidade</ElementsQuantity>
                        </HeaderTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>SAP</ElementsSap>
                            <ElementsDescription>Descrição</ElementsDescription>
                            <ElementsCategory>Categoria</ElementsCategory>
                            <ElementsUnit>UND</ElementsUnit>
                            <ElementsQuantity>Quantidade</ElementsQuantity>
                        </BodyTable>
                    </Table> */}
                </WrapperTable>
            </Header>
        </Container>
    )
}

export default Storage