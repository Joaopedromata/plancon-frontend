import React, { useEffect, useState } from 'react'
import api from '../../service/api.js'


import {
    Container,
    MiniWrapper
} from './styles.js'


const ModalQuantity = ({ id = 'modal', onClose = () => {}, identifier, location, sapProps, descriptionProps, categoryProps, unitProps }) => {

    const [ positive, setPositive ] = useState()
    const [ negative, setNegative ] = useState()
    const [ sap, setSap ] = useState()
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ unit, setUnit ] = useState('')

    useEffect(() => {
        api.get(`/storages/inputs/quantity/sum/${identifier}/${location}`).then((res) => {
            

            setPositive(res.data.rms[0].inputs[0].total)
            setSap(res.data.rms[0].inputs[0].product.sap)
            setDescription(res.data.rms[0].inputs[0].product.description)
            setCategory(res.data.rms[0].inputs[0].product.category.name)
            setUnit(res.data.rms[0].inputs[0].product.unit.name)
        }).catch(() => {
            setSap(sapProps)
            setDescription(descriptionProps)
            setCategory(categoryProps)
            setUnit(unitProps)
            setPositive(0)
        })

        api.get(`/storages/outputs/quantity/sum/${identifier}/${location}`).then((res) => {

            const checkNegative = res.data.plancons[0].outputs[0].total
            

            return setNegative(checkNegative)
        }).catch(() => setNegative(0))
    }, [])

    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }

    
    
    return (
        <Container id={id} onClick={handleOutsideClick}>
            <MiniWrapper>
                <h2>{sap}</h2>
                <h2>{description}</h2>
                <h2>{category}</h2>
                <h2>{unit}</h2>
                <h2>{positive - negative}</h2>
            </MiniWrapper>
        </Container>

    )
}

export default ModalQuantity