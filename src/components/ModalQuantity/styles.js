import styled from 'styled-components'


export const Container = styled.div`
    z-index: 1;

    width: 100%;
    min-height: 100%;

    position: fixed;
    overflow: none;

    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`

export const MiniWrapper = styled.div`
    height: 70px;
    width: 1056px;
    border-radius: 8px;
    background-color: var(--color-white);
    margin: 50px 0;
    cursor: auto;
    color: var(--color-font-dark);

    display: flex;
    align-items: center;
    justify-content: space-around;

    > h2 {
        font-weight: 600;
        font-family: 'Poppins';
        font-size: 22px;
    }
`