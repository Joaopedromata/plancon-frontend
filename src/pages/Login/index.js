import React from 'react'
import imgLogin from '../../assets/image-login.svg'
import ButtonBigScreen from '../../components/ButtonBigScreen'
import InputLogin from '../../components/InputLogin'

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
                        <InputLogin placeholder="Insira sua chapa" type="text"/>
                        </Label>
                        <Label>Senha
                        <InputLogin placeholder="Insira sua senha"type="password"/>
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