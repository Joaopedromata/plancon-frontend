import React, { useState, useEffect } from 'react'
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

import NoneMessage from '../../components/NoneMessage'
import api from '../../service/api'

const Location = () => {

    const history = useHistory()

    const [ userLocations , setUserLocations ] = useState([])

    useEffect(() => {
        const checkUser = localStorage.getItem('user')

        api.get(`/locations/${checkUser}`).then((res) => setUserLocations(res.data.locations)).catch(() => alert('Falha ao carregar dados'))
    }, [])
   
    return (
        <Container>
        <Header title="Essas são as obras disponíveis." back="/menu"/>
            <Wrapper>
                {userLocations.length > 0 ? (
                    <>
                    {userLocations.map(data => (
                        <Card key={data.id}>
                            <ItemsGroup>
                                <NameGroup>
                                    <Name>{data.name}</Name>
                                    <div className="hr" />
                                </NameGroup>
                                <InfoGroup>
                                    <City>{data.city.name} / {data.city.uf}</City>
                                    <CellsCount>{data.cells.length} Células disponíveis</CellsCount>
                                </InfoGroup>
                                <Select onClick={() => history.push('/estoque', {id: data.id, name: data.name})}>Selecionar</Select>
                            </ItemsGroup>
                        </Card>
                    ))}
                    </>
                ) : (
                    <NoneMessage text="Nenhum registro encontrado para este usuário."/>
                )}
            </Wrapper>
        </Container>
    )
}

export default Location