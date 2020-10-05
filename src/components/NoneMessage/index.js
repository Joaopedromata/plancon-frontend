import React from 'react'
import imgNone from '../../assets/image-none.svg'

import {
    NoneWrapper,
    ImgNone,
    Text
} from './styles'

const NoneMessage = ({ text }) => {
    return (
        <NoneWrapper>
            <ImgNone src={imgNone} alt="Imagem de folhas vazias" />
            <Text>{text}</Text>
        </NoneWrapper>
    )
}

export default NoneMessage