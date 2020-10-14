import styled from 'styled-components'

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
    margin-bottom: 100px;
    min-height: 600px;
    background-color: var(--color-white);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;    
`

export const WrapperTable = styled.div`
    width: 90%;
    height: 500px;
    background-color: green;
`

export const HeaderTable = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3fr 1fr 1fr 2fr;
    grid-template-areas:
        'date moves location id icons'
    ;   
    background-color: yellow;

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 600;
    
`

export const HeaderDateDetails = styled.div``

export const HeaderMoves = styled.div``

export const HeaderLocation = styled.div``

export const HeaderIdentifier = styled.div``

export const BodyTable = styled.div``

export const BodyDateDetails = styled.div``

export const BodyMoves = styled.div``

export const BodyLocation = styled.div``

export const BodyIdentifier = styled.div``

export const BodyIconGroup = styled.div``