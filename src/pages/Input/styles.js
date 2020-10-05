import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'

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

export const WrapperForms = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;

    hr {
        border: 0.5px solid var(--color-input-placeholder);
        background-color: var(--color-input-placeholder);
    }
`

export const Title = styled.div`
    margin-top: 25px;
    margin-bottom: 10px;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 25px;
    color: var(--color-font-dark-black);
`

export const FormGroup = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const InputFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-top: 15px;
`
export const InputFormGroupProduct = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
`

export const Label = styled.label`
    font-family: 'Archivo';
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 15px;
    color: var(--color-font-dark);
`

export const InputForm = styled.input`
    background-color: var(--color-input-background);
    height: 45px;
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 20px;
    font-family: 'Archivo';

    &:focus {
        /* box-shadow: 0 0 7px var(--color-input-shadow); */
    }

    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }

`

export const InputProduct = styled.input`
    background-color: var(--color-input-background);
    height: 45px;
    max-width: 168px;
    margin-right: 25px;
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 0 0 20px;
    font-family: 'Archivo';

    &:focus {
        /* box-shadow: 0 0 7px var(--color-input-shadow); */
    }

    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }

`

export const InputDescription = styled.input`
    margin-right: 25px;
    background-color: var(--color-input-background);
    height: 45px;
    width: 300px;
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 20px;
    font-family: 'Archivo';

    &:focus {
        /* box-shadow: 0 0 7px var(--color-input-shadow); */
    }

    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }

`

export const SubmitButton = styled.button`
    width: 50px;
    height: 45px;

    cursor: pointer;
    border-radius: 8px;
    border: none;
    font-family: 'Archivo'; 
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-button-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 300ms;
    outline: none;

    &:hover{
        filter:brightness(90%);
    };
`

export const IconPlus = styled(FiPlus)`
    color: var(--color-white);
`