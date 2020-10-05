import styled from 'styled-components'

export const ButtonGreen = styled.button`
    cursor: pointer;
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: none;
    font-family: 'Archivo'; 
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-button-primary);
    transition: filter 300ms;
    outline: none;

    &:hover{
        filter:brightness(90%);
    }
`