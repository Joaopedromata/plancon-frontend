import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'

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

    const history = useHistory()


    const pupulateCollaborators = () => {
        const checkUser = localStorage.getItem('user')

        api.get(`/locations/user/${checkUser}`).then((res) => {
            const users = [res.data.locations]

            users.map(data => {
                [data[0].users].map(values => {
                    console.log(values[0].name, values[0].identifier)
                })
            })

            
        })
    }

    useEffect(() => {pupulateCollaborators()}, [])

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
            </Wrapper>
            
        </Container>
    )
}

export default Collaborator