import styled from 'styled-components'
import {
    FiArrowLeft,
    FiLogOut
} from 'react-icons/fi'

export const Container = styled.div`
    min-height: 250px;
    height: 30%;
    max-height: 350px;
    width: 100%;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .title {
        width: 1160px;
        height: 200px;
    }
`

export const HeaderGroups = styled.div`
    width: 1160px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

`

export const IconLeft = styled(FiArrowLeft)`
    width: 25px;
    height: 25px;
    color: var(--color-white);
    transition: filter 300ms;

    &:hover {
        filter:brightness(85%);
    }

`

export const IconRight = styled(FiLogOut)`
    width: 25px;
    height: 25px;
    color: var(--color-white);
    transition: filter 300ms;

    &:hover {
        filter:brightness(85%);
    }
`

export const Title = styled.div`
    margin: 20px 0 0 50px;
    max-width: 450px;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 25px;
    color: var(--color-white);
`