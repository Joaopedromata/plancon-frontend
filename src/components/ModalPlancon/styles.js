import styled from 'styled-components'
import { FiPrinter } from 'react-icons/fi'
import { MdPictureAsPdf } from 'react-icons/md'

export const Container = styled.div`
    z-index: 1;

    width: 100%;
    min-height: 100%;

    position: absolute;

    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`

export const MiniWrapper = styled.div`
    height: 70px;
    width: 130px;
    border-radius: 8px;
    background-color: var(--color-white);
    margin: 50px 0;
    cursor: auto;
    color: var(--color-font-dark);

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Printer = styled(FiPrinter)`
    height: 30px;
    width: 30px;
    transition: transform 500ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`

export const PDF = styled(MdPictureAsPdf)`
    height: 30px;
    width: 30px;
    transition: transform 500ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`

export const Wrapper = styled.div`
    width: 1056px;
    min-height: 600px;
    margin-bottom: 10%;
    border-radius: 8px;
    background-color: var(--color-white);
    cursor: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-font-dark);
`

export const HeaderWrapper = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 50px;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Poppins';
`

export const Date = styled.h3``

export const Location = styled.h3``

export const Identifier = styled.h3``

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
    
`

export const WrapperElements = styled.thead`
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const TableData = styled.tr`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 140px 500px 130px 80px;
    grid-template-areas:
        'SAP description unit quantity'
    ;
    margin-bottom: 15px;
`

export const ElementsTableData = styled.tr`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 140px 500px 130px 80px;
    grid-template-areas:
        'SAP description unit quantity'
    ;
    padding: 15px 0;    
    width: 100%;

`

export const TitleElementsSAP = styled.th`
    grid-area: SAP;
    text-align: left;
    font-weight: 600;
`

export const TitleElementsDescription = styled.th`
    grid-area: description;
    text-align: left;
    font-weight: 600;
`

export const TitleElementsUnit = styled.th`
    grid-area: unit;
    text-align: left;
    font-weight: 600;
`

export const TitleElementsQuantity = styled.th`
    grid-area: quantity;
    text-align: left;
    font-weight: 600;
`

export const TitleElementsIcons = styled.th`
    grid-area: icons;
    text-align: left;
    font-weight: 600;
`

export const ElementsSAP = styled.th`
    grid-area: SAP;
    text-align: left;
    font-weight: 400;
`

export const ElementsDescription = styled.th`
    grid-area: description;
    text-align: left;
    font-weight: 400;
`

export const ElementsUnit = styled.th`
    grid-area: unit;
    text-align: left;
    font-weight: 400;
`

export const ElementsQuantity = styled.th`
    grid-area: quantity;
    text-align: left;
    font-weight: 400;
`




