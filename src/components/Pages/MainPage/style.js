import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: var(--color-text-white);
    font-weight: 700;
    
    margin-bottom: 15rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledInput = styled.div`
    width: 30rem;
    height: 7rem;
    margin-left: 1rem;
    padding: 1rem;
    border: 0;
    border-radius: .8rem;
    background: var(--color-primary-light);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
        font-size: 4rem;
    }

    @media (max-width: 768px) {
        width: 50rem;
        margin-left: 0;
    }
`

export const Label = styled.label`
    font-size: 5rem;
    margin-left: 5rem;
    
    &::first-child {
        margin-left: 0;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 5px;
    }
`;

export const Body = styled.div`

`;