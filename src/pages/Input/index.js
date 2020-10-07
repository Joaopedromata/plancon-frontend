import React, { useState } from 'react'
import Header from '../../components/Header'
import api from '../../service/api'
import checkNull from '../../helpers/checkNull'

import {
    Container,
    Wrapper,
    WrapperForms,
    Title,
    FormGroup,
    InputFormGroup,
    InputFormGroupProduct,
    Label,
    InputForm,
    InputProduct,
    InputDescription,
    SubmitButton,
    IconPlus,
    Table,
    WrapperTables,
    TableData,
    TitleElementsSAP,
    TitleElementsDescription,
    TitleElementsUnit,
    TitleElementsQuantity,
    TitleElementsIcons,
    ElementsTableData,
    ElementsSAP,
    ElementsDescription,
    ElementsUnit,
    ElementsQuantity,
    ElementsIcons,
    Edit,
    Remove,
    ButtonSave
} from './styles'

const Input = ({ location }) => {

    const [ identifier, setIdentifier ] = useState('')
    const [ dateRM, setDateRM ] = useState('')

    const [ isDisabled, setIsDisabled ] = useState(true)
    const [ isDisabledRM, setIsDisabledRM ] = useState(false)

    const [ sap, setSap ] = useState()
    const [ description, setDescription ] = useState('')
    const [ unit, setUnit ] = useState('')
    const [ quantity, setQuantity ] = useState('')

    const [ fillTable, setFillTable ] = useState([])


    const handleFormRMSubmit = e => {

        e.preventDefault()

        const data = {
            rm: identifier,
            date: dateRM
        }

        const checkUser = localStorage.getItem('user')

        checkNull(data)

        api.post(`storages/rm/${checkUser}/${location.state.id}`, data).then((res) => {
            alert(`RM ${res.data.rm} cadastrada com sucesso, insira os produtos.`)
            setIsDisabled(false)
            setIsDisabledRM(true)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleFormProductSubmit = e => {
    
        e.preventDefault()

        const data = {
            sap,
            description,
            unit,
            quantity
        }

        checkNull(data)

        setFillTable([...fillTable, data])
    
    }

    const handleSearchProduct = async () => {
        
        await api.get(`/products/search/${sap}`).then((res) => {
            setDescription(res.data.description)
            
            api.get(`/products/units/search/${res.data.user_id}`).then((res) => {
                setUnit(res.data.name)
            })

        }).catch(() => alert('Produto não encontrado.'))
        
    }



    return (
        <Container>
            <Header title="Insira novos produtos ao seu estoque." back="/estoque" infosBack={location.state}/>
            <Wrapper>
                <WrapperForms>
                    <Title>Dados da RM</Title>
                    <hr />
                    <FormGroup onSubmit={handleFormRMSubmit}>
                        <InputFormGroup>
                            <Label>RM</Label>
                            <InputForm 
                                placeholder="Número da RM"
                                type="text"
                                disabled={isDisabledRM}  
                                onChange={e => setIdentifier(e.target.value)}
                                value={identifier}
                            />
                        </InputFormGroup>
                        <InputFormGroup>
                            <Label>Data RM</Label>
                            <InputForm 
                                placeholder="Data da RM"
                                type="date"
                                disabled={isDisabledRM}  
                                onChange={e => setDateRM(e.target.value)}
                                value={dateRM}
                            />
                        </InputFormGroup>
                        <SubmitButton><IconPlus /></SubmitButton>
                    </FormGroup>
                </WrapperForms>
                <WrapperForms>
                    <Title>Dados do Produto</Title>
                    <hr />
                    <FormGroup onSubmit={handleFormProductSubmit}>
                        <InputFormGroupProduct>
                            <InputFormGroup>
                                <Label>SAP</Label>
                                <InputProduct 
                                    placeholder="Código SAP"
                                    disabled={isDisabled}    
                                    onChange={e => setSap(e.target.value)}
                                    value={sap}
                                    onBlur={() => handleSearchProduct()}
                                />
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>Descrição</Label>
                                <InputDescription 
                                    placeholder="Descrição do Produto"
                                    disabled   
                                    onChange={e => setDescription(e.target.value)}
                                    value={description} 
                                />
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>UND</Label>
                                <InputProduct 
                                    placeholder="Unidade"
                                    disabled 
                                    onChange={e => setUnit(e.target.value)}
                                    value={unit}   
                                />
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>Quantidade</Label>
                                <InputProduct 
                                    placeholder="Quantidade"
                                    disabled={isDisabled}    
                                    onChange={e => setQuantity(e.target.value)}
                                    value={quantity}
                                />
                            </InputFormGroup>
                        </InputFormGroupProduct>
                        <SubmitButton
                            
                        ><IconPlus /></SubmitButton>
                    </FormGroup>
                </WrapperForms>
                <Table>
                    {fillTable.length === 0 ? (null) : (
                        <WrapperTables>
                            <TableData>
                                <TitleElementsSAP>SAP</TitleElementsSAP>
                                <TitleElementsDescription>Descrição</TitleElementsDescription>
                                <TitleElementsUnit>UND</TitleElementsUnit>
                                <TitleElementsQuantity>Quantidade</TitleElementsQuantity>
                                <TitleElementsIcons></TitleElementsIcons>
                            </TableData>
                        </WrapperTables>
                    )}
                    
                    {fillTable.map(products => (
                        <>
                            <hr />
                            <ElementsTableData>
                                <ElementsSAP>{products.sap}</ElementsSAP>
                                <ElementsDescription>{products.description}</ElementsDescription>
                                <ElementsUnit>{products.unit}</ElementsUnit>
                                <ElementsQuantity>{products.quantity}</ElementsQuantity>
                                <ElementsIcons><Edit /><Remove /></ElementsIcons>
                            </ElementsTableData>
                        </>
                    ))}
                </Table>              
                <ButtonSave>Salvar</ButtonSave>
            </Wrapper>
        </Container>
    )
}

export default Input