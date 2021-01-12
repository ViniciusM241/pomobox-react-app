import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    width: 90vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1025px) {
        max-width: 1100px;

        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: 270px 200px 100px;
        grid-template-areas: 
        "Logo Image Image"
        ". Image Image"
        "Button Foot Foot";
        align-self: center;
    }
`;

export const LogoContainer = styled.div`
    > img {
        width: 100%;
        margin-bottom: 2%;
        display: block;
    }

    > h2 {
        text-align: center;
        font: 700 4rem 'Roboto';
        color: var(--color-terciary);
    }

    @media (min-width: 1025px) {
        grid-area: Logo;
        align-self: center;
        text-align: initial;

        > img { width: 90%; }

        > h2 {
            text-align: initial;
            font-weight: 500;

            > span { display: block; }  
        }
    }
`;

export const Image = styled.img`
    width: 70vw;

    @media (min-width: 1025px) {
        grid-area: Image;
        width: 450px;
        justify-self: start;
    }
`;

export const ButtonContainer = styled.div`
    @media (min-width: 1025px) {
        grid-area: Button;
        display: flex;
        justify-content: space-between;

        > a {
            margin: 0;
            margin-right: 6.5rem;
        }
        > a:last-child { margin: 0; }
    }
`;

export const Foot = styled.p`
    font-size: 2rem;
    color: var(--color-terciary);

    @media (min-width: 1025px) {
        grid-area: Foot;
        align-self: center;
        justify-self: center;
    }
`;