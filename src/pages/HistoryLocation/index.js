import React from 'react'
import Header from '../../components/Header'
import {
    Container,
    Wrapper,
    Table,
    WrapperTables,
    TableData,
    TitleElementsDate,
    TitleElementsMoves,
    TitleElementsIdentifier,
    TitleElementsIcons
} from './styles'


const HistoryLocation = ({ location }) => {
    return (
        <Container>
            <Header title={`Aqui estão as movimentações na obra ${location.state.name}`} back="/estoque" infosBack={location.state}/>
            <Wrapper>
                <Table>
                    <WrapperTables>
                        <TableData>
                            <TitleElementsDate>Data</TitleElementsDate>
                            <TitleElementsMoves>Movimentações</TitleElementsMoves>
                            <TitleElementsIdentifier>ID</TitleElementsIdentifier>
                            <TitleElementsIcons></TitleElementsIcons>
                        </TableData>
                    </WrapperTables>
                </Table>
                
            </Wrapper>
        </Container>
    )
}

export default HistoryLocation