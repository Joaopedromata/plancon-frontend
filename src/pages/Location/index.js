import React from 'react'
import Header from '../../components/Header'

import {
    Container,
    Wrapper,
    Card,
    ItemsGroup,
    NameGroup,
    Name,
    InfoGroup,
    City,
    CellsCount,
    Select

} from './styles'

const Location = () => {
    return (
        <Container>
        <Header title="Essas são as obras disponíveis." back="/menu"/>
            <Wrapper>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <hr />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Location