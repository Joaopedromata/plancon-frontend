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
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
`

export const Table = styled.table`
    width: 90%;

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
        width: 90%;
    }
    
`

export const WrapperTables = styled.thead`
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: red;
`

export const TableData = styled.div``

export const TitleElementsDate = styled.div``

export const TitleElementsMoves = styled.div``

export const TitleElementsIdentifier = styled.div``

export const TitleElementsIcons = styled.div``