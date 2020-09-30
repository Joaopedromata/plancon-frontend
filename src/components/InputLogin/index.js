import React from 'react'

import {
    Insert
} from './styles'


const Input = ({ placeholder, type, onChange }) => {
    return (
        <Insert placeholder={placeholder} type={type} onChange={onChange}/>
    )
}

export default Input