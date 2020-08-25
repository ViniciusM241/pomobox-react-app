import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    background: var(--color-primary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Head = styled.div`
    padding: 1.5rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width: 100%;
        display: block;
        margin-bottom: 1rem;
    }

    > Button {

    }
`;
export const Main = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 3rem;

    > a > button {
        width: 50rem;
    }
`;