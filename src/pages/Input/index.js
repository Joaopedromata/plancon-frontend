import React from 'react'
import Header from '../../components/Header'

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
    TitleElementsTableData,
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

const Input = () => {
    return (
        <Container>
            <Header title="Insira novos produtos ao seu estoque." back="/estoque"/>
            <Wrapper>
                <WrapperForms>
                    <Title>Dados da RM</Title>
                    <hr />
                    <FormGroup>
                        <InputFormGroup>
                            <Label>RM</Label>
                            <InputForm placeholder="Número da RM"/>
                        </InputFormGroup>
                        <InputFormGroup>
                            <Label>Data RM</Label>
                            <InputForm placeholder="Data da RM"/>
                        </InputFormGroup>
                        <SubmitButton><IconPlus /></SubmitButton>
                    </FormGroup>
                </WrapperForms>
                <WrapperForms>
                    <Title>Dados do Produto</Title>
                    <hr />
                    <FormGroup>
                        <InputFormGroupProduct>
                            <InputFormGroup>
                                <Label>SAP</Label>
                                <InputProduct placeholder="Código SAP"/>
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>Descrição</Label>
                                <InputDescription placeholder="Descrição do Produto"/>
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>UND</Label>
                                <InputProduct placeholder="Unidade"/>
                            </InputFormGroup>
                            <InputFormGroup>
                                <Label>Quantidade</Label>
                                <InputProduct placeholder="Quantidade"/>
                            </InputFormGroup>
                        </InputFormGroupProduct>
                        <SubmitButton><IconPlus /></SubmitButton>
                    </FormGroup>
                </WrapperForms>
                <Table>
                    <WrapperTables>
                        <TableData>
                            <TitleElementsSAP>SAP</TitleElementsSAP>
                            <TitleElementsDescription>Descrição</TitleElementsDescription>
                            <TitleElementsUnit>UND</TitleElementsUnit>
                            <TitleElementsQuantity>Quantidade</TitleElementsQuantity>
                            <TitleElementsIcons></TitleElementsIcons>
                        </TableData>
                    </WrapperTables>
                    <hr />
                    <ElementsTableData>
                        <ElementsSAP>321441</ElementsSAP>
                        <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                        <ElementsUnit>UN</ElementsUnit>
                        <ElementsQuantity>100</ElementsQuantity>
                        <ElementsIcons><Edit /><Remove /></ElementsIcons>
                    </ElementsTableData>
                    <hr />
                    <ElementsTableData>
                        <ElementsSAP>321441</ElementsSAP>
                        <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                        <ElementsUnit>UN</ElementsUnit>
                        <ElementsQuantity>100</ElementsQuantity>
                        <ElementsIcons><Edit /><Remove /></ElementsIcons>
                    </ElementsTableData>
                    <hr />
                    <ElementsTableData>
                        <ElementsSAP>321441</ElementsSAP>
                        <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                        <ElementsUnit>UN</ElementsUnit>
                        <ElementsQuantity>100</ElementsQuantity>
                        <ElementsIcons><Edit /><Remove /></ElementsIcons>
                    </ElementsTableData>
                    <hr />
                    <ElementsTableData>
                        <ElementsSAP>321441</ElementsSAP>
                        <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                        <ElementsUnit>UN</ElementsUnit>
                        <ElementsQuantity>100</ElementsQuantity>
                        <ElementsIcons><Edit /><Remove /></ElementsIcons>
                    </ElementsTableData>
                    <hr />
                    <ElementsTableData>
                        <ElementsSAP>321441</ElementsSAP>
                        <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                        <ElementsUnit>UN</ElementsUnit>
                        <ElementsQuantity>100</ElementsQuantity>
                        <ElementsIcons><Edit /><Remove /></ElementsIcons>
                    </ElementsTableData>
                    
                </Table>              
                <ButtonSave>Salvar</ButtonSave>
            </Wrapper>
        </Container>
    )
}

export default Input