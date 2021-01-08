import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    width: 40%;
    margin: 0 0 5rem 5%;
    float: left;

    box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, .3);
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: center;

    cursor: pointer;

    @media (max-width: 768px) {
        
        margin: 0 auto;
        margin-bottom: 20px;
        width: 100%;
        padding: 4rem 2rem;
        font-size: 4rem;
    }

`;

export const Close = styled.h1`
    color: var(--color-primary);
    font-size: 3rem;
    font-weight: bolder;

    cursor: pointer;

    transition: .5s color;
    
    &:hover{
        color: #A62519;
    }
`;

export const Title = styled.h2`
    font-size: 3rem;
    text-transform: capitalize;

    margin-left: 10px;
    
    cursor: pointer;

`;

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.39);
    position: fixed;
    top: 0;
    left: 0;
`;

export const BigModal = styled.div`
    width: 60%;
    height: 70vh;
    padding: 44px 64px;
    float: left;
    overflow-y: scroll;

    background-color: #FFF;
    box-shadow: 0 19px 13px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    z-index: 1000;
    position: fixed;
    top: 15vh;
    left: 20%;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;

    ::-webkit-scrollbar {
        display: none;
    }

    > h1 {
        justify-content: right;
        font-size: 5rem;
        float: right;
        width: 1%;
    }

    > h2 {
        font-size: 5rem;
        margin: 70px 50px 0 50px;
        float: left;

        cursor: default;
    }

    > button {
        float: left;
        margin-left: 50px;
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        padding: 5%;
        border-radius: 0;

        top: 0;
        left: 0;

        > h1 {
            margin: 0;
        }

        > h2 {
            margin: 0;
            margin-top: 5%;
        }

        > button {
            margin-left: 0;
            margin-top: 5%;
            width: 90%;
            position: absolute;
            bottom: 5%;
            left: 5%;
        }

    }

`;

export const Description = styled.p`
    font-size: 3.5rem;
    font-weight: 100;
    text-transform: capitalize;
    text-align: justify;

    margin: 50px 50px;
    float: left;

    @media (max-width: 768px) {
        display: block;
        margin: 0;
        margin-top: 5%;
    }
`;