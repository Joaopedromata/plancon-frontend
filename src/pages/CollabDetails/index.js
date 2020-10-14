import React from 'react'
import Header from '../../components/Header'

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
    BodyIconGroup
} from './styles'

const CollabDetails = () => {
    return (
        <Container>
            <Header title="Essas são as movimentações de Alberto Lima." back="/colaboradores"/>
            <Wrapper>
                <WrapperTable>
                    <HeaderTable>
                        <HeaderDateDetails>Data</HeaderDateDetails>
                        <HeaderMoves>Movimentações</HeaderMoves>
                        <HeaderLocation>Obra</HeaderLocation>
                        <HeaderIdentifier>ID</HeaderIdentifier>
                    </HeaderTable>
                    <BodyTable>
                        <BodyDateDetails></BodyDateDetails>
                        <BodyMoves></BodyMoves>
                        <BodyLocation></BodyLocation>
                        <BodyIdentifier></BodyIdentifier>
                        <BodyIconGroup></BodyIconGroup>
                    </BodyTable>
                </WrapperTable>
            </Wrapper>
        </Container>
    )
}

export default CollabDetails