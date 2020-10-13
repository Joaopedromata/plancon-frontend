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
    margin-bottom: 100px;
    background-color: var(--color-white);
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
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
