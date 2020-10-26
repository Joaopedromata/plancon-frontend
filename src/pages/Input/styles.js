import styled from 'styled-components'
import { FiPlus, FiEdit, FiX } from 'react-icons/fi'

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

export const FormGroup = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const InputFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-right: 22px;
`
export const InputFormGroupRM = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`

export const InputFormGroupProduct = styled.div`

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 170px 430px 130px 168px 1fr;
    grid-template-areas:
        'SAP description unit quantity'
    ;
    
`

export const Label = styled.label`
    font-family: 'Archivo';
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 15px;
    color: var(--color-font-dark);
`

export const InputForm = styled.input`
    background-color: var(--color-input-background);
    height: 45px;
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 20px;
    font-family: 'Archivo';


    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }

`

export const InputSap = styled.input `
    grid-area: SAP;

    background-color: var(--color-input-background);
    height: 45px;
    
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 0 0 20px;
    font-family: 'Archivo';


    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }

`

export const InputDescription = styled.input `
    grid-area: description;
   
    background-color: var(--color-input-background);
    height: 45px;
    
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 0 0 20px;
    font-family: 'Archivo';


    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }
`

export const InputUnit = styled.input `
    grid-area: unit;
    background-color: var(--color-input-background);
    height: 45px;
    
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 0 0 20px;
    font-family: 'Archivo';


    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }
`

export const InputQuantity = styled.input `
    grid-area: quantity;
    background-color: var(--color-input-background);
    height: 45px;
    
    border-radius: 8px;
    border: 1px solid var(--color-input-placeholder);
    outline: none;
    padding: 0 0 0 20px;
    font-family: 'Archivo';


    &::-webkit-input-placeholder { 
        font-weight: 400;
        color: var(--color-font-dark);
        font-size: 15px;
    }
`

export const SubmitButton = styled.button`
    width: 50px;
    height: 45px;

    cursor: pointer;
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
    };
`

export const IconPlus = styled(FiPlus)`
    color: var(--color-white);
`

export const Table = styled.table`
    width: 90%;

    padding-bottom: 100px;

    margin-top: 35px;
    margin-bottom: 10px;
    color: var(--color-font-dark);

    font-family: 'Archivo';
    font-size: 15px;

    hr {
        border: 0.5px solid var(--color-input-placeholder);
        background-color: var(--color-input-placeholder);
    }
`

export const WrapperTables = styled.thead`
    hr {
        border: 0.5px solid var(--color-input-placeholder);
        background-color: var(--color-input-placeholder);
    }
`

export const TableData = styled.tr`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 170px 430px 130px 158px 1fr;
    grid-template-areas:
        'SAP description unit quantity icons'
    ;
    margin-bottom: 15px;
`

export const ElementsTableData = styled.tr`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 170px 430px 130px 158px 1fr;
    grid-template-areas:
        'SAP description unit quantity icons'
    ;
    padding: 15px 0;    

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

export const ElementsIcons = styled.th`
    grid-area: icons;
    text-align: left;
    font-weight: 400;
    display: flex;
    align-items: center;
`

export const ButtonSave = styled.button`
    width: 180px;
    height: 45px;

    cursor: pointer;
    border-radius: 8px;
    border: none;
    font-family: 'Archivo'; 
    font-weight: 400;
    font-size: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-button-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 300ms;
    outline: none;

    position: absolute;
    right: 5%;
    bottom: 25px;

    &:hover{
        filter:brightness(90%);
    };
`

export const Edit = styled(FiEdit)`
    color: var(--color-font-dark);
    transition: transform 500ms;
    margin-right: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    };
`

export const Remove = styled(FiX)`
    height: 20px;
    width: 20px;
    color: var(--color-font-dark);
    transition: transform 500ms;
    cursor: pointer;
    
    &:hover{
        transform: scale(1.1)
    };
`