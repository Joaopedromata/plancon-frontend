import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import NoneMessage from '../../components/NoneMessage'
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


    const [ colab, setColab ] = useState([])


    useEffect(() => {
           
        const checkUser = localStorage.getItem('user')        

        const userValue = []

        api.get(`/locations/user/${checkUser}`).then((res) => {

            const users = [res.data.locations]

            users.map(data => {
                for (var i in data) {
                    [data[i].users].map(values => {
                        for (var j in data) {
                            [values[j]].map(value => {
                                return userValue.push(value)
                            })
                        }
                    })
                }                
            })

            const cleanArray = userValue.filter(function( element ) {
                return element !== undefined;
            });
            
            function getUnique(arr, comp) {

                                
                const unique =  arr.map(e => e[comp])
                    .map((e, i, final) => final.indexOf(e) === i && i)
                    .filter((e) => arr[e]).map(e => arr[e]);
                return unique;
            }

            setColab(getUnique(cleanArray, 'id'))

        })

        


    }, [])

    
    

    

    
    return (
        <Container>
            <Header title="Veja quem são seus colaboradores." back="/menu"/>
            <Wrapper>         
                {colab.length > 0 ? (
                    <>
                        {colab.map((colabs, index) => (
                            <Card key={index}>
                                <ItemsGroup>
                                    <IconUser />
                                    <InfoGroup>
                                        <Name>{colabs.name}</Name>
                                        <Identifier>{colabs.identifier}</Identifier>
                                    </InfoGroup>
                                    <Select>Movimentações</Select>
                                </ItemsGroup>
                            </Card>
                        ))}
                    </>
                ) : (
                    <NoneMessage text="Nenhum colaborador encontrado para este usuário."/>
                )}                
            </Wrapper>
            
        </Container>
    )
}

export default Collaborator