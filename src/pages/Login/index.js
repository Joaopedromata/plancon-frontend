import React from 'react'
import imgLogin from '../../assets/image-login.svg'

import {
    Container,
    Header,
    Logo,
    Form,
    Title,
    FormGroup,
    InputGroup,
    Label,
    Button,
    ImageGroup,
    Image
} from './styles'

import InputLogin from '../../components/InputLogin'

const Login = () => {
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
                <FormGroup>
                    <InputGroup>
                        <Label>Chapa
                        <InputLogin placeholder="Insira sua chapa"/>
                        </Label>
                        <Label>Senha
                        <InputLogin placeholder="Insira sua senha"/>
                        </Label>
                    </InputGroup>
                    <Button>Entrar</Button>
                </FormGroup>
            </Form> 
            <ImageGroup>
                <Image src={imgLogin}></Image>
            </ImageGroup>
        </Container>
    )
}

export default Login