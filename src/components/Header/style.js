import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    background: var(--color-primary);

    
`;
export const Head = styled.div`
    padding: 10px 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > a > img {
        width: 100%;
        @media (max-width: 768px) {
            width: 85%;
        }
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

export const Image = styled.img`
    position: fixed;
    right: 5px;
    bottom: 5px;

    width: 115px;
    height: 115px;
    overflow: scroll;

    @media (max-width: 768px) {
        display: none;
      }
`