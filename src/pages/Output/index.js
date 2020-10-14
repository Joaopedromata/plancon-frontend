import React, { useState } from 'react'
import {
    Container,
    Wrapper,
    WrapperForms,
    Title,
    FormGroup,
    InputFormGroupPlancon,
    Label,
    InputForm,
    SubmitButton,
    IconPlus,
    InputFormGroupProduct,
    InputSap,
    InputFormGroup,
    InputDescription,
    InputUnit,
    InputQuantity,
    Table,
    ButtonSave,
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
    Remove
} from './styles'

import checkNull from '../../helpers/checkNull'
import Header from '../../components/Header'
import api from '../../service/api'
import ModelPlancon from '../../components/ModalPlancon'


const Output = ({ location }) => {

    const [ isModalVisible, setIsModalVisible ] = useState(false)

    const [ fillTable, setFillTable ] = useState([])

    const [ datePlancon, setDatePlancon ] = useState('')
    const [ cell, setCell ] = useState()

    const [ sap, setSap ] = useState()
    const [ description, setDescription ] = useState('')
    const [ unit, setUnit ] = useState('')
    const [ quantity, setQuantity ] = useState('')

    const [ isDisabledPlancon, setIsDisabledPlancon ] = useState(false)
    const [ isDisabled, setIsDisabled ] = useState(true)
    const [ isDisabledSap, setIsDisabledSap ] = useState(true)

    const [ planconId, setPlanconId ] = useState()
    const [ isEdit, setIsEdit ] = useState(false)

    const locations = location.state.id

    const insertProdutsOnDatabase = () => {

        fillTable.map(data => {

            api.get(`/products/search/${data.sap}`).then((res) => {
                
                const productId = (res.data.id)
                const quantityValue = data.quantity

                api.post(`/storages/inputs/${productId}/${planconId}`, { quantity: quantityValue }).then(() => {
                    
                }).catch(() => {
                    alert('Erro ao cadastrar produtos na Plancon')
                })
    
            }).catch(() => alert('Produto não encontrado.'))

        })
        setIsModalVisible(true)

        return alert('Produtos inseridos na Plancon com sucesso')

        

    }

    const handleFormPlanconSubmit = e => {

        e.preventDefault()

        const data = {
            date: datePlancon
        }

        const checkUser = localStorage.getItem('user')

        checkNull(data)

        api.get(`locations/cells/search/${cell}`).then((res) => {
            
            api.post(`storages/plancon/${checkUser}/${locations}/${res.data.id}`, data).then((res) => {
                setPlanconId(res.data.id)
                alert(`Plancon ${res.data.id} cadastrada com sucesso, insira os produtos.`)            
            }).catch(() => {
                alert('Ocorreu algum erro ao cadastrar planCon, verifique os dados digitados e tente novamente')
            })

            setIsDisabledPlancon(true)
            setIsDisabled(false)
            setIsDisabledSap(false)

        }).catch(() => alert('Célula não encontrada, verifique o número e tente novamente'))
    }

    const handleSearchProduct = async () => {
        
        await api.get(`/products/search/${sap}`).then((res) => {
            setDescription(res.data.description)
            
            api.get(`/products/units/search/${res.data.unit_id}`).then((res) => {
                setUnit(res.data.name)
            }).catch(() => alert('Produto não encontrado.'))

        }).catch(() => alert('Produto não encontrado.'))
        
    }

    const handleFormProductSubmit = e => {
        
        e.preventDefault()

        const data = {
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
                alert('Esse produto já foi inserido na Plancon')
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
           <Header title="Retire produtos do seu estoque." back="/estoque"infosBack={location.state}/>
             <Wrapper>
                 <WrapperForms>
                     <Title>Dados da Plancon</Title>
                     <hr />
                    <FormGroup onSubmit={handleFormPlanconSubmit}>
                        <InputFormGroupPlancon>
                            <Label>Célula</Label>
                            <InputForm 
                                placeholder="Número da Célula"
                                type="text"
                                disabled={isDisabledPlancon}
                                onChange={e => setCell(e.target.value)}
                                value={cell}
                            />
                        </InputFormGroupPlancon>
                        <InputFormGroupPlancon>
                            <Label>Data Plancon</Label>
                            <InputForm 
                                placeholder="Data da Plancon"
                                type="date"
                                disabled={isDisabledPlancon}
                                onChange={e => setDatePlancon(e.target.value)}
                                value={datePlancon}
                            />
                        </InputFormGroupPlancon>
                        <SubmitButton disabled={isDisabledPlancon} ><IconPlus /></SubmitButton>
                    </FormGroup> 
                </WrapperForms>
                <WrapperForms>
                   <Title>Dados do Produto</Title>
                    <hr /> 
                    <FormGroup onSubmit={handleFormProductSubmit}>
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
                 <ButtonSave onClick={() => insertProdutsOnDatabase()}>Salvar</ButtonSave>
             </Wrapper>
             {isModalVisible && <ModelPlancon 
                                    infos={fillTable}
                                    cities={location.state} 
                                    onClose={() => setIsModalVisible(false)}
                                    date={datePlancon}
                                    identifier={planconId}
                                />}
         </Container>
    )
}

export default Output