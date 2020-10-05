import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-secondary);
`

export const Wrapper = styled.div`
    width: 1056px;
    margin-top: -3%;
    background-color: var(--color-white);
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const FirstGroup = styled.div`
    width: 90%;
    background-color: yellow;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 25px;
    color: var(--color-font-dark-black);
`

export const FormGroup = styled.form`
    display: flex;
    justify-content: space-between;
    background-color: green;
`

export const InputFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

export const Label = styled.label`
    font-family: 'Archivo';
    font-weight: 600;
    font-size: 15px;
    color: var(--color-font-dark);
`

export const InputForm = styled.input`
`

export const SubmitButton = styled.button`
    width: 50px;
`