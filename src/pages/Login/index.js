import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 

import imgLogin from '../../assets/image-login.svg'
import ButtonBigScreen from '../../components/ButtonBigScreen'
import InputLogin from '../../components/InputLogin'
import api from '../../service/api'

import checkNull from '../../helpers/checkNull'

import {
    Container,
    Header,
    Logo,
    Form,
    Title,
    FormGroup,
    InputGroup,
    Label,
    ImageGroup,
    Image
} from './styles'

const Login = () => {
    
    const history = useHistory()

    const [ identifier, setIdentifier ] = useState()
    const [ password, setPassword ] = useState('')

    const checkLocalStorage = () => {
        const oldToken = localStorage.getItem('app-token')
        if (oldToken) {
            localStorage.clear()
        }
    }

    useEffect(() => {
        checkLocalStorage()
    }, [])

    const handleFormSubmit = async e => {
        
        e.preventDefault()

        const data = {
            identifier,
            password
        }

        await checkNull(data)

        await api.post('accounts/login', data
        ).then((res) => {
            localStorage.setItem('app-token', res.data.token)
            history.push('/menu')
        }).catch(() => {
            alert('Falha no método de entrada')
        })

    }

    return (
        <Container>
            <Header>
                <Logo>
                    planCon
                </Logo>
            </Header>
            <Form>
                <Title>
                    Faça seu login para <br /> continuar.
                </Title>
                <FormGroup onSubmit={handleFormSubmit}>
                    <InputGroup>
                        <Label>Chapa
                        <InputLogin 
                            placeholder="Insira sua chapa" 
                            type="text"
                            onChange={e => setIdentifier(e.target.value)}
                            value={identifier}
                        />
                        </Label>
                        <Label>Senha
                        <InputLogin 
                            placeholder="Insira sua senha"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        </Label>
                    </InputGroup>
                    <ButtonBigScreen>
                        <span>Entrar</span>
                    </ButtonBigScreen>
                </FormGroup>
            </Form> 
            <ImageGroup>
                <Image src={imgLogin}></Image>
            </ImageGroup>
        </Container>
    )
}

export default Login