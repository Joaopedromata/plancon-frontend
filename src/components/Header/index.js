import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    Container,
    HeaderGroups,
    IconLeft,
    IconRight,
    Title,
} from './styles'



const Header = ({ title, back }) => {

    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
    
        history.push('/')
    }
    
    return (
        <Container>
            <HeaderGroups>
                <IconLeft onClick={() => history.push(back)}/>
                <IconRight onClick={() => handleLogout()}/>
            </HeaderGroups>
            <div className="title">
                <Title>{title}</Title>
            </div>
        </Container>
    )
}

export default Header