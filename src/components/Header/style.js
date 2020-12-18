import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    background: var(--color-primary);

    
`;
export const Head = styled.div`
    padding: 0 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > a > img {
        width: 100%;
    }

    > Button {

    }
`;
export const Main = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 1.5rem;

    > a > button {
        width: 50rem;
    }
`;