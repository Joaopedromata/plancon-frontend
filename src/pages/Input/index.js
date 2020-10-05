import React from 'react'
import Header from '../../components/Header'

import {
    Container,
    Wrapper,
    FirstGroup,
    Title,
    FormGroup,
    InputFormGroup,
    Label,
    InputForm,
    SubmitButton
} from './styles'

const Input = () => {
    return (
        <Container>
            <Header title="Insira novos produtos ao seu estoque." back="/estoque"/>
            <Wrapper>
                <FirstGroup>
                    <Title>Dados da RM</Title>
                    <hr />
                    <FormGroup>
                        <InputFormGroup>
                        <Label>RM</Label>
                            <InputForm />
                        </InputFormGroup>
                        <InputFormGroup>
                        <Label>Data RM</Label>
                            <InputForm />
                        </InputFormGroup>
                        <SubmitButton />
                    </FormGroup>
                </FirstGroup>
            </Wrapper>
        </Container>
    )
}

export default Input