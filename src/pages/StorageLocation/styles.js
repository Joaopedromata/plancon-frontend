import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-secondary);
`

export const WrapperTable = styled.div`
    width: 1056px;
    margin-top: -3%;
    margin-bottom: 100px;
    background-color: var(--color-white);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Table = styled.table`
    width: 70%;
    
    padding-bottom: 100px;

    margin-top: 35px;
    margin-bottom: 10px;

    font-family: 'Archivo';
    font-size: 15px;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    hr {
        border: 0.5px solid var(--color-input-placeholder);
        background-color: var(--color-input-placeholder);
        width: 100%;
    }
    
`

export const HeaderTable = styled.div`
    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 9fr 2fr;
    grid-template-areas:
        'sap description category'
    ;   

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 600;
`

export const BodyTable = styled.div`

    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 9fr 2fr;
    grid-template-areas:
        'sap description category'
    ;   

   

    > button {
        color: var(--color-font-dark);
        background: none;

        cursor: pointer;
        font-family: 'Archivo';
        font-size: 15px;
        font-weight: 400;
        outline: none;
        border: none;
        text-align: start;
        transition: transform 300ms;

        &:hover{
            transform: scale(1.01)
        }  
    }
`