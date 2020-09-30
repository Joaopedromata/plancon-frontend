import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' 

import imgLogin from '../../assets/image-login.svg'
import ButtonBigScreen from '../../components/ButtonBigScreen'
import InputLogin from '../../components/InputLogin'
import api from '../../service/api'

import { checkNull } from '../../helpers/checkNull'

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

    const handleFormSubmit = async e => {
        
        e.preventDefault()

        const data = {
            identifier,
            password
        }

        await checkNull(data)

        await api.post('accounts/login', data
        ).then(() => {
            console.log(data)
            history.push('/menu')
        }).catch((err) => {
            console.log(err)
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
            <Form onSubmit={handleFormSubmit}>
                <Title>
                    Faça seu login para <br /> continuar.
                </Title>
                <FormGroup>
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