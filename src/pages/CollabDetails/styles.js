import styled from 'styled-components'
import { FiEye, FiPrinter } from 'react-icons/fi'
import { MdPictureAsPdf } from 'react-icons/md'

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
    justify-content: center;    
`

export const WrapperTable = styled.div`
    width: 90%;
    min-height: 500px;
    margin: 20px 0;

    hr {
        border: 0.5px solid var(--color-input-placeholder);
        background-color: var(--color-input-placeholder);
    }
`

export const HeaderTable = styled.div`
    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 4fr 2fr 1fr 1fr;
    grid-template-areas:
        'date moves location id icons'
    ;   

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 600;
    
`

export const HeaderDateDetails = styled.div`
    grid-area: date;
`

export const HeaderMoves = styled.div`
    grid-area: moves;
`

export const HeaderLocation = styled.div`
    grid-area: location;
`

export const HeaderIdentifier = styled.div`
    grid-area: id;
`

export const BodyTable = styled.div`
    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 4fr 2fr 1fr 1fr;
    grid-template-areas:
        'date moves location id icons'
    ;   

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 400;
`

export const BodyDateDetails = styled.div``

export const BodyMoves = styled.div``

export const BodyLocation = styled.div``

export const BodyIdentifier = styled.div``

export const BodyIconGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const IconEye = styled(FiEye)`
    height: 20px;
    width: 20px;

    transition: transform 500ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`

export const IconPrinter = styled(FiPrinter)`
    height: 20px;
    width: 20px;

    transition: transform 500ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`

export const IconPDF = styled(MdPictureAsPdf)`
    height: 20px;
    width: 20px;

    transition: transform 500ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`