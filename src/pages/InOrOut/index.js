import React from 'react'
import { useHistory } from 'react-router-dom'
import imgInOrOut from '../../assets/image-in-or-out.svg'

import {
    Container,
    Header,
    Logo,
    Form,
    Title,
    FormGroup,
    Button,
    ImageGroup,
    Image
} from './styles'

const InOrOut = () => {

    const history = useHistory()

    return (
        <Container>
            <Header>
                <Logo>
                    planCon
                </Logo>
            </Header>
            <Form>
                <Title>
                    O que você deseja?
                </Title>
                <FormGroup>
                    <Button onClick={() => history.push('/estoque/entrada')}>
                        <span>Inserir</span>
                    </Button>
                    <Button>
                        <span>Retirar</span>
                    </Button>
                    <Button>
                        <span>Menu</span>
                    </Button>
                </FormGroup>
            </Form> 
            <ImageGroup>
                <Image src={imgInOrOut} alt="Homem carregando caixas"/>
            </ImageGroup>
        </Container>
    )
}

export default InOrOut