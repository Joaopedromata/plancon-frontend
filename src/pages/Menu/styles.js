import styled from 'styled-components'


export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: var(--color-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const List = styled.ul`
    margin-top: -4%;
    min-height: 677px;
    width: 1056px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    li {
        list-style: none;
    }
`

export const Element = styled.button`
    outline: none;
    border: 0;
    height: 195px;
    width: 484px;
    border-radius: 8px;
    background-color: var(--color-white);
    transition: filter 300ms;

    display: flex;
    flex-direction: column;

    &:hover {
        filter:brightness(95%);
    }

    .line {
        width: 124px;
        border: 2px solid var(--color-light-purple);
        margin-left: 50px;
        background-color: var(--color-light-purple);
    }
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 32px;
    font-family: 'poppins';
    color: var(--color-font-dark);
    padding: 0 50px;
    margin-top: 15px;
`

export const ItemsGroup = styled.div`
    height: 51px;
    width: 380px;
    margin: 40px 0 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icon = styled.div`
    svg {
        width: 50px;
        height: 50px;
        color: var(--color-font-dark);
    }    
`

export const Description = styled.div`
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    height: 54px;
    width: 280px;
    font-family: 'poppins';
    color: var(--color-font-light);
`