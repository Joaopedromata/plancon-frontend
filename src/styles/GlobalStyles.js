import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    html, 
    body, 
    #root {
        background-color: -var(--color-primary);
        font-size: 60%;
    }

    :root {
        --color-primary: #6564DB;
        --color-secondary: #F0F0F7;
        --color-button-primary: #81E979;
        --color-button-secondary: #8C8BDE;
        --color-font-dark: #6A6180;
        --color-font-light: #9C98A6;
        --color-font-dark-black: #32264D;
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-input-shadow: #DD9AC2;
        --color-input-placeholder: #C9CAD9;
        --color-light-purple: #8C8BDE;
        --color-input-background: #F8F8FC;
    }
`