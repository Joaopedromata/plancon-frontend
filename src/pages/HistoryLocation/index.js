import React from 'react'
import Header from '../../components/Header'
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
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                    <hr />
                    <BodyTable>
                        <ElementsDate>03/10/2020</ElementsDate>
                        <ElementsMoves>Criação de Plancon</ElementsMoves>
                        <ElementsIdentifier>123312</ElementsIdentifier>
                        <ElementsIcons>
                            <IconEye />
                            <IconPrinter />
                            <IconPDF />
                        </ElementsIcons>
                    </BodyTable>
                </Table>
                
            </Wrapper>
        </Container>
    )
}

export default HistoryLocation