import styled from 'styled-components'

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
    width: 60%;
    padding-bottom: 25px;
    font-family: 'poppins';
    font-weight: 600;
    font-size: 3rem;
    color: var(--color-white);
`

export const FormGroup = styled.div`
    grid-area: form;   
    height: 200px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const Button = styled.button`
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: none;
    font-family: 'Archivo'; 
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-button-secondary);
    transition: filter 300ms;
    outline: none;

    &:hover{
        filter:brightness(90%);
    }
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
