import React from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'

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

    const history = useHistory()

    return (
        <Container>
        <Header title="Essas são as obras disponíveis." back="/menu"/>
            <Wrapper>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <div className="hr" />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select onClick={() => history.push('/estoque')} >Selecionar</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <div className="hr" />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select onClick={() => history.push('/estoque')} >Selecionar</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <div className="hr" />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select onClick={() => history.push('/estoque')} >Selecionar</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <div className="hr" />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select onClick={() => history.push('/estoque')} >Selecionar</Select>
                    </ItemsGroup>
                </Card>
                <Card>
                    <ItemsGroup>
                        <NameGroup>
                            <Name>VNO</Name>
                            <div className="hr" />
                        </NameGroup>
                        <InfoGroup>
                            <City>João Pedro de Oliveira Mata</City>
                            <CellsCount>321216</CellsCount>
                        </InfoGroup>
                        <Select onClick={() => history.push('/estoque')} >Selecionar</Select>
                    </ItemsGroup>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Location