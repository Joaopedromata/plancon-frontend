import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import api from '../../service/api'
import checkNull from '../../helpers/checkNull'
import ModalRM from '../../components/ModalRM'

import {
    Container,
    Wrapper,
    WrapperForms,
    Title,
    FormGroup,
    InputFormGroup,
    InputFormGroupRM,
    InputFormGroupProduct,
    Label,
    InputForm,
    InputSap,
    InputDescription,
    InputUnit,
    InputQuantity,
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

    const [ isModalVisible, setIsModalVisible ] = useState(false)

    const [ identifier, setIdentifier ] = useState('')
    const [ dateRM, setDateRM ] = useState('')

    const [ isDisabled, setIsDisabled ] = useState(true)
    const [ isDisabledRM, setIsDisabledRM ] = useState(false)
    const [ isDisabledSap, setIsDisabledSap ] = useState(true)
    const [ isDisabledSave, setIsDisabledSave ] = useState(true)

    const [ rmId, setRmId ] = useState()

    const [ sap, setSap ] = useState()
    const [ description, setDescription ] = useState('')
    const [ unit, setUnit ] = useState('')
    const [ quantity, setQuantity ] = useState('')

    const [ fillTable, setFillTable ] = useState([])

    const [ isEdit, setIsEdit ] = useState(false)

    useEffect(() => {
        {!isModalVisible && cleanProducts()}
    }, [isModalVisible])
    
    const cleanProducts = () => {
        setIdentifier('')
        setDateRM('') 
        setFillTable([])
    }

    const insertProdutsOnDatabase = () => {

        fillTable.map((data) => {

            api.get(`/products/search/${data.sap}`).then((res) => {
                
                const productId = (res.data.id)
                const quantityValue = data.quantity

                api.post(`/storages/inputs/${productId}/${rmId}`, { quantity: quantityValue }).then(() => {
                    
                }).catch((err) => {
                    console.log(err)
                    alert('Erro ao cadastrar produtos na RM')
                })
    
            }).catch(() => alert('Produto não encontrado.'))

        })

        setIsDisabled(true)
        setIsDisabledRM(false)
        setIsDisabledSap(true) 
        setIsModalVisible(true)
        
        return alert('Produtos inseridos na RM com sucesso')
    }

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
            setRmId(res.data.id)
            setIsDisabled(false)
            setIsDisabledRM(true)
            setIsDisabledSap(false)
            
        }).catch(() => {
            alert('Essa RM já exite no sistema, verifique o número e tente novamente')
        })
    }

    const handleFormProductSubmit = e => {
        
        e.preventDefault()

        setIsDisabledSave(false)

        const data = {
            id: fillTable.length,
            sap,
            description,
            unit,
            quantity
        }


        if(sap === '' || sap == null || typeof sap == undefined){
            return alert('Preencha todos os campos')
        }  

        if(description === '' || description == null || typeof description == undefined){
            return alert('Preencha todos os campos')
        }  

        if(unit === '' || unit == null || typeof unit == undefined){
            return alert('Preencha todos os campos')
        } 
        
        if(quantity === '' || quantity == null || typeof quantity == undefined){
            return alert('Preencha todos os campos')
        }          

        const addToFillTable = (compare) => {
            const index = fillTable.findIndex(search => search.sap == compare);
            if(index < 0) {
                setFillTable([...fillTable, data])
            } else {
                alert('Esse produto já foi inserido na RM')
            }

            setSap('')
            setDescription('')
            setUnit('')
            setQuantity('')
        }
                            
        const editFillTable = (compare) => {

            const newFillTable = fillTable

            const found = newFillTable.findIndex(search => search.sap === compare)

            newFillTable[found].quantity = quantity

            setFillTable(newFillTable)
            setIsEdit(false)
            setIsDisabledSap(false)

            setSap('')
            setDescription('')
            setUnit('')
            setQuantity('')
       }


        if(!isEdit) {
            return addToFillTable(sap)
        } else {
            return editFillTable(sap)
        }        

    }

    const handleSearchProduct = async () => {
        
        await api.get(`/products/search/${sap}`).then((res) => {
            setDescription(res.data.description)
            
            api.get(`/products/units/search/${res.data.unit_id}`).then((res) => {
                setUnit(res.data.name)
            }).catch(() => alert('Produto não encontrado.'))

        }).catch(() => alert('Produto não encontrado.'))
        
    }

    const handleRemoveProduct = (id) => {

        const filter = fillTable.filter(incident => incident.sap !== id)

        setFillTable(filter)

    }

    const handleEditProduct = (compare) => {

        const found = fillTable.findIndex(search => search.sap === compare)
        
        setSap(fillTable[found].sap)
        setDescription(fillTable[found].description)
        setUnit(fillTable[found].unit)
        setQuantity(fillTable[found].quantity)

        setIsDisabledSap(true)
        setIsEdit(true)
    }

    return (
        <Container>
            <Header title="Insira novos produtos ao seu estoque." back="/estoque" infosBack={location.state}/>
            <Wrapper>
                <WrapperForms>
                    <Title>Dados da RM</Title>
                    <hr />
                    <FormGroup onSubmit={handleFormRMSubmit}>
                        <InputFormGroupRM>
                            <Label>RM</Label>
                            <InputForm 
                                placeholder="Número da RM"
                                type="text"
                                disabled={isDisabledRM}  
                                onChange={e => setIdentifier(e.target.value)}
                                value={identifier}
                            />
                        </InputFormGroupRM>
                        <InputFormGroupRM>
                            <Label>Data RM</Label>
                            <InputForm 
                                placeholder="Data da RM"
                                type="date"
                                disabled={isDisabledRM}  
                                onChange={e => setDateRM(e.target.value)}
                                value={dateRM}
                            />
                        </InputFormGroupRM>
                        <SubmitButton><IconPlus /></SubmitButton>
                    </FormGroup>
                </WrapperForms>
                <WrapperForms>
                    <Title>Dados do Produto</Title>
                    <hr />
                    <FormGroup onSubmit={e => handleFormProductSubmit(e)}>
                        <InputFormGroupProduct>
                            <InputFormGroup>
                                <Label>SAP</Label>
                                <InputSap 
                                    placeholder="Código SAP"
                                    disabled={isDisabledSap}    
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
                                <InputUnit 
                                    placeholder="Unidade"
                                    disabled 
                                    onChange={e => setUnit(e.target.value)}
                                    value={unit}   
                                />
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>Quantidade</Label>
                                <InputQuantity
                                    placeholder="Quantidade"
                                    disabled={isDisabled}    
                                    onChange={e => setQuantity(e.target.value)}
                                    value={quantity}
                                />
                            </InputFormGroup>
                        </InputFormGroupProduct>
                        <SubmitButton><IconPlus /></SubmitButton>
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
                                <ElementsIcons><Edit onClick={() => handleEditProduct(products.sap)}/><Remove onClick={() => handleRemoveProduct(products.sap)}/></ElementsIcons>
                            </ElementsTableData>
                        </>
                    ))}
                </Table>              
                <ButtonSave onClick={() => insertProdutsOnDatabase()} disabled={isDisabledSave}>Salvar</ButtonSave>
            </Wrapper>
            {isModalVisible && <ModalRM 
                                    infos={fillTable} 
                                    cities={location.state} 
                                    onClose={() => setIsModalVisible(false)}
                                    date={dateRM}
                                    identifier={identifier}
                                />}
        </Container>
    )
}

export default Input