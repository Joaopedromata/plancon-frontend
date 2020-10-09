import React from 'react'

const Output = () => {
    return (
        <h1>oi</h1>
        // <Container>
        //     <Header title="Insira novos produtos ao seu estoque." back="/estoque" infosBack={location.state}/>
        //     <Wrapper>
        //         <WrapperForms>
        //             <Title>Dados da RM</Title>
        //             <hr />
        //             <FormGroup onSubmit={handleFormRMSubmit}>
        //                 <InputFormGroupRM>
        //                     <Label>RM</Label>
        //                     <InputForm 
        //                         placeholder="Número da RM"
        //                         type="text"
        //                         disabled={isDisabledRM}  
        //                         onChange={e => setIdentifier(e.target.value)}
        //                         value={identifier}
        //                     />
        //                 </InputFormGroupRM>
        //                 <InputFormGroupRM>
        //                     <Label>Data RM</Label>
        //                     <InputForm 
        //                         placeholder="Data da RM"
        //                         type="date"
        //                         disabled={isDisabledRM}  
        //                         onChange={e => setDateRM(e.target.value)}
        //                         value={dateRM}
        //                     />
        //                 </InputFormGroupRM>
        //                 <SubmitButton><IconPlus /></SubmitButton>
        //             </FormGroup>
        //         </WrapperForms>
        //         <WrapperForms>
        //             <Title>Dados do Produto</Title>
        //             <hr />
        //             <FormGroup onSubmit={e => handleFormProductSubmit(e)}>
        //                 <InputFormGroupProduct>
        //                     <InputFormGroup>
        //                         <Label>SAP</Label>
        //                         <InputSap 
        //                             placeholder="Código SAP"
        //                             disabled={isDisabledSap}    
        //                             onChange={e => setSap(e.target.value)}
        //                             value={sap}
        //                             onBlur={() => handleSearchProduct()}
        //                         />
        //                     </InputFormGroup>
        //                     <InputFormGroup>
        //                         <Label>Descrição</Label>
        //                         <InputDescription 
        //                             placeholder="Descrição do Produto"
        //                             disabled   
        //                             onChange={e => setDescription(e.target.value)}
        //                             value={description} 
        //                         />
        //                     </InputFormGroup>
        //                     <InputFormGroup>
        //                         <Label>UND</Label>
        //                         <InputUnit 
        //                             placeholder="Unidade"
        //                             disabled 
        //                             onChange={e => setUnit(e.target.value)}
        //                             value={unit}   
        //                         />
        //                     </InputFormGroup>
        //                     <InputFormGroup>
        //                         <Label>Quantidade</Label>
        //                         <InputQuantity
        //                             placeholder="Quantidade"
        //                             disabled={isDisabled}    
        //                             onChange={e => setQuantity(e.target.value)}
        //                             value={quantity}
        //                         />
        //                     </InputFormGroup>
        //                 </InputFormGroupProduct>
        //                 <SubmitButton
                            
        //                 ><IconPlus /></SubmitButton>
        //             </FormGroup>
        //         </WrapperForms>
        //         <Table>
        //             {fillTable.length === 0 ? (null) : (
        //                 <WrapperTables>
        //                     <TableData>
        //                         <TitleElementsSAP>SAP</TitleElementsSAP>
        //                         <TitleElementsDescription>Descrição</TitleElementsDescription>
        //                         <TitleElementsUnit>UND</TitleElementsUnit>
        //                         <TitleElementsQuantity>Quantidade</TitleElementsQuantity>
        //                         <TitleElementsIcons></TitleElementsIcons>
        //                     </TableData>
        //                 </WrapperTables>
        //             )}
                    
        //             {fillTable.map(products => (
        //                 <>
        //                     <hr />
        //                     <ElementsTableData>
        //                         <ElementsSAP>{products.sap}</ElementsSAP>
        //                         <ElementsDescription>{products.description}</ElementsDescription>
        //                         <ElementsUnit>{products.unit}</ElementsUnit>
        //                         <ElementsQuantity>{products.quantity}</ElementsQuantity>
        //                         <ElementsIcons><Edit onClick={() => handleEditProduct(products.sap)}/><Remove onClick={() => handleRemoveProduct(products.sap)}/></ElementsIcons>
        //                     </ElementsTableData>
        //                 </>
        //             ))}
        //         </Table>              
        //         <ButtonSave onClick={() => insertProdutsOnDatabase()}>Salvar</ButtonSave>
        //     </Wrapper>
        // </Container>
    )
}

export default Output