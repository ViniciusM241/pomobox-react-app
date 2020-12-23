import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, .5);
    width: 500px;
    border-radius: 5px;

    @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 100%;
    }

`;

export const Close = styled.h1`
    color: var(--color-primary);
    font-size: 3rem;
`;