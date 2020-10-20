import React from 'react'
import {
    Container,
    WrapperTable,
    Table,
    HeaderTable,
    ElementsSap,
    ElementsDescription,
    ElementsCategory,
    ElementsUnit,
    ElementsQuantity,
    BodyTable
} from './styles'
import Header from '../../components/Header'
import { useEffect } from 'react'
import api from '../../service/api'

const Storage = ({ location }) => {

    const arr = []
    useEffect(() => {
        api.get('/storages/inputs/quantity/sum/1/1').then(res => {
            const teste = res.data.plancons
            
            teste.map(oi => {
                const testando = oi.outputs



                testando.map(opa => {
                    return arr.push({quantity: opa.quantity})
                })
                
            } )

            
            
        })

        console.log(arr)
    }, [])


    return (
        <Container>
            <Header title="Esses são os materiais disponíveis na obra VNO" back="/estoque" infosBack={location.state} />
              <WrapperTable>
                    <Table>
                        <HeaderTable>
                            <ElementsSap>SAP</ElementsSap>
                            <ElementsDescription>Descrição</ElementsDescription>
                            <ElementsCategory>Categoria</ElementsCategory>
                            <ElementsUnit>UND</ElementsUnit>
                            <ElementsQuantity>Quantidade</ElementsQuantity>
                        </HeaderTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                        <hr />
                        <BodyTable>
                            <ElementsSap>45645</ElementsSap>
                            <ElementsDescription>BANDEJA OPT 12 FUSÕES CEO FX-T CINZA</ElementsDescription>
                            <ElementsCategory>BANDEJA</ElementsCategory>
                            <ElementsUnit>UN</ElementsUnit>
                            <ElementsQuantity>12</ElementsQuantity>
                        </BodyTable>
                    </Table>
                </WrapperTable>
        </Container>
    )
}

export default Storage