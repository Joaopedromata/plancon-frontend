import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import api from '../../service/api'


import {
    Container,
    List,
    Element,
    Title,
    ItemsGroup,
    Icon,
    Description
} from './styles'

import { 
    FiUsers,
    FiPackage,
    FiUser,
    FiSettings,
    FiClipboard,
    FiInfo
} from 'react-icons/fi'


const Menu = () => {

    const history = useHistory()

    useEffect(() => {

        const Token = localStorage.getItem('app-token')

        api.get('check/caniuse', {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        }).catch(() => {
            history.push('/')
        })
        
    }, [])
    

    return (
        <Container>
            <Header title="Aqui você escolhe o que deseja fazer no sistema." back="/"/>
                <List>
                    <li>
                        <Element onClick={() => history.push('/colaboradores')}>
                            <Title>Colaboradores</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiUsers /></Icon>
                                <Description>Verifique a movimentação de seus colaboradores.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>
                    <li>
                        <Element onClick={() => history.push('/obras')}>
                            <Title>Obras</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiSettings /></Icon>
                                <Description>Faça a gestão de seus materiais através das obras.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>
                    <li>
                        <Element onClick={() => history.push('/menu')}>
                            <Title>Materiais</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiPackage /></Icon>
                                <Description>Verifique os materiais disponíveis em seu estoque.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>
                    <li>
                        <Element onClick={() => history.push('/menu')}>
                            <Title>Relatórios</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiClipboard /></Icon>
                                <Description>Como vão indo as coisas por aí? Confira por aqui.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>
                    <li>
                        <Element onClick={() => history.push('/menu')}>
                            <Title>Minha Conta</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiUser /></Icon>
                                <Description>Confira os dados de sua conta e faça modificações.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>
                    <li>
                        <Element onClick={() => history.push('/menu')}>
                            <Title>Sobre</Title>
                            <div className="line"/>
                            <ItemsGroup>
                                <Icon><FiInfo /></Icon>
                                <Description>Saiba como o planCon foi desenvolvido.</Description>
                            </ItemsGroup>
                        </Element>
                    </li>  
                </List>
            
        </Container>
    )
}

export default Menu