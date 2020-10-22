import React, {useState} from 'react'
import {
    Container,
    WrapperTable,
    Table,
    HeaderTable,
    BodyTable
} from './styles'
import Header from '../../components/Header'
import { useEffect } from 'react'
import api from '../../service/api'
import ModalQuantity from '../../components/ModalQuantity'

const Storage = ({ location }) => {

    const [ products, setProducts ] = useState([])
    const [ isModalQuantityVisible, setIsModalQuantityVisible ] = useState(false)
    const [ identifier, setIdentifier ] = useState()
    const [ sap, setSap ] = useState()
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ unit, setUnit ] = useState('')

    useEffect(() => {
        api.get('/products').then((res) => {
            return setProducts(res.data)
        })      
    }, [])

    const handleLinkClick = (id, sap, description, category, unit) => {
        setIsModalQuantityVisible(true)
        setIdentifier(id)
        setSap(sap)
        setDescription(description)
        setCategory(category)
        setUnit(unit)
    }

   

    return (
        <Container>
            <Header title={`Esses são os materiais disponíveis na obra ${location.state.name}`} back="/estoque" infosBack={location.state}/>
              <WrapperTable>
                    <Table>
                        <HeaderTable>
                            <h4>SAP</h4>
                            <h4>Descrição</h4>
                            <h4>Categoria</h4>
                        </HeaderTable>
                       {products.map(data => (
                            <>
                                <hr />                                
                                <BodyTable>
                                    <button onClick={() => handleLinkClick(data.id, data.sap, data.description, data.category.name, data.unit.name)}>{data.sap}</button>
                                    <button onClick={() => handleLinkClick(data.id, data.sap, data.description, data.category.name, data.unit.name)}>{data.description}</button>
                                    <button onClick={() => handleLinkClick(data.id, data.sap, data.description, data.category.name, data.unit.name)}>{data.category.name}</button>
                                </BodyTable>
                            </>
                       ))}
                      
                    </Table>
                </WrapperTable>
                {isModalQuantityVisible && <ModalQuantity 
                                    onClose={() => setIsModalQuantityVisible(false)}
                                    identifier={identifier}
                                    location={location.state.id}
                                    sapProps={sap}
                                    descriptionProps={description}
                                    categoryProps={category}
                                    unitProps={unit}
                                />
                }
        </Container>
    )
}

export default Storage