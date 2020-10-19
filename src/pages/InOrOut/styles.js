import styled from 'styled-components'
import { FiBookOpen, FiBook, FiBox, FiClipboard } from 'react-icons/fi'

export const Container = styled.div`
    height: 100vh;
    background-color: var(--color-primary);
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'header header'
        'form img'
        'footer footer'
    ;
`

export const Header = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    font-family: 'electrolize';
    font-size: 5rem;
    display: flex;
    align-items: center;
    padding: 0 60px;
    color: var(--color-white);
`

export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.div`
    max-width: 350px;
    padding-bottom: 25px;
    font-family: 'poppins';
    font-weight: 600;
    font-size: 3rem;
    color: var(--color-white);
`

export const FormGroup = styled.div`
    grid-area: form;   
    height: 185px;
    width: 255px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    cursor: pointer;
    height: 80px;
    width: 120px;
    border-radius: 8px;
    border: none;
    font-family: 'Archivo'; 
    font-weight: 500;
    font-size: 2rem;
    color: var(--color-white);
    background-color: var(--color-button-secondary);
    transition: filter 300ms;
    outline: none;

    &:hover{
        filter:brightness(90%);
    }
`

export const IconInsert = styled(FiBookOpen)`
    margin-bottom: 10px;
    width: 28px;
    height: 28px;
`

export const IconRemove = styled(FiBook)`
    margin-bottom: 10px;
    width: 28px;
    height: 28px;
`

export const IconStorage = styled(FiBox)`
    margin-bottom: 10px;
    width: 28px;
    height: 28px;
`
export const IconHistory = styled(FiClipboard)`
    margin-bottom: 10px;
    width: 28px;
    height: 28px;
`

export const ImageGroup = styled.div`
    grid-area: img;
    display: flex;
    flex: 1;
    flex-direction: center;
    align-items: center;
`

export const Image = styled.img`
    display: flex;
    flex-direction: center;
    align-items: center;
    width: 90%
`
