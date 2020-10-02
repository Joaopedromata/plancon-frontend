import React from 'react'
import Header from '../../components/Header'

import {
    Container,
    Wrapper,
    Card,
    ItemsGroup,
    IconUser,
    InfoGroup,
    Name,
    Identifier,
    Select
} from './styles.js'

const Collaborator = () => {
    return (
        <Container>
            <Header title="Veja quem são seus colaboradores." back="/menu"/>
            <Wrapper>
                <Card>
                    <ItemsGroup>
                        <IconUser />
                        <InfoGroup>
                            <Name>João Pedro de Oliveira Mata</Name>
                            <Identifier>321216</Identifier>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <IconUser />
                        <InfoGroup>
                            <Name>João Pedro de Oliveira Mata</Name>
                            <Identifier>321216</Identifier>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <IconUser />
                        <InfoGroup>
                            <Name>João Pedro de Oliveira Mata</Name>
                            <Identifier>321216</Identifier>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <IconUser />
                        <InfoGroup>
                            <Name>João Pedro de Oliveira Mata</Name>
                            <Identifier>321216</Identifier>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <IconUser />
                        <InfoGroup>
                            <Name>João Pedro de Oliveira Mata</Name>
                            <Identifier>321216</Identifier>
                        </InfoGroup>
                        <Select>Movimentações</Select>
                    </ItemsGroup>
                </Card>
                
            </Wrapper>
            
        </Container>
    )
}

export default Collaborator