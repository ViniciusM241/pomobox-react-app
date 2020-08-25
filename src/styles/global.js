import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        background: var(--color-background);
        color: var(--color-text-black);
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    :root {
        --color-primary: #DA3021;
        --color-primary-light: #FF5040; 
        --color-secondary: #21D972;
        --color-terciary: #A62519;
        --color-background: #EFEFEF;
        --color-text-black: #333;
        --color-text-light-black: #3F3E3E;
        --color-text-white: #fff;
        --color-text-light-white: #EFEFEF;
        --color-button-primary: #21D972;
        --color-button-primary-dark: #1DBF63;
        --color-button-secondary: #A62519;
        --color-button-secondary-dark: #8C1F15;

        font-size: 60%;

        @media (min-width: 700px) {
            font-size: 62.5%;
        }

        @media (max-width: 699px){
            font-size: 40%;
        }
    }  
`;