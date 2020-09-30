import styled from 'styled-components'

export const Insert = styled.input`
    width: 100%;
    background-color: var(--color-white);
    height: 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 0 20px;
    font-family: 'Archivo';

    &:focus {
        box-shadow: 0 0 7px var(--color-input-shadow);
    }

    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: --color-input-placeholder;
        font-size: 15px;
    }
`