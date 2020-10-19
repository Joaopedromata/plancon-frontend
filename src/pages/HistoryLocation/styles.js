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

export const Table = styled.table`
    width: 80%;

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

export const HeaderTable = styled.thead`
    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 9fr 2fr 2fr;
    grid-template-areas:
        'date moves id icons'
    ;   

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 600;
`

export const BodyTable = styled.thead`
    margin: 15px 0; 
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 9fr 2fr 2fr;
    grid-template-areas:
        'date moves id icons'
    ;   

    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;
    font-weight: 400;
`

export const ElementsDate = styled.div``

export const ElementsMoves = styled.div``

export const ElementsIdentifier = styled.div``

export const ElementsIcons = styled.div`
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