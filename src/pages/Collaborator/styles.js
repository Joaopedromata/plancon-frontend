import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'


export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-secondary);
`
export const Wrapper = styled.section`
    width: 1056px;
    margin-top: -3%;
`

export const Card = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 130px;
    background-color: var(--color-white);

    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(n+2){
        margin-top: 25px;
    }
`

export const ItemsGroup = styled.div`
    width: 950px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const IconUser = styled(FiUser)`
    height: 80px;
    width: 80px;
    color: var(--color-font-dark);
`

export const InfoGroup = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Name = styled.h2`
    font-family: 'Archivo';
    font-weight: 600;
    font-size: 30px;
    color: var(--color-font-dark-black);
`

export const Identifier = styled.h4`
    font-family: 'Archivo';
    font-weight: 400;
    font-size: 25px;
    color: var(--color-font-dark);
`

export const Select = styled.div`
    cursor: pointer;
    height: 50px;
    width: 240px;
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
    }
`
