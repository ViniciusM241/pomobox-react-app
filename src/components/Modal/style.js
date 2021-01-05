import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    width: 40%;
    margin: 0 0 3rem 4rem;
    float: left;

    box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, .3);
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: center;

    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 100%;
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

export const Title = styled.h1`
    font-size: 3rem;
    text-transform: capitalize;

    margin-left: 10px;
    
    cursor: pointer;

`