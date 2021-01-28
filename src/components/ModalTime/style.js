import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    width: 30%;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 3px;

    background-color: #fff;
    box-shadow: 0 7px 10px rgba(0,0,0,0.25);

    position: relative;

    &:first-child {
        margin-top: -50px;
    }

    @media (max-width: 768px) {
        width: 90%;
        min-height: 300px;
        margin-top: -100px;
    }
`;

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LeftButton = styled.img`
    width: 3.5rem;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 5rem;
    color: #000;
`;

export const RightButton = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--color-primary);
    cursor: pointer;
`;

export const Main = styled.div`
    margin-top: 40px;
`;

export const SubText = styled.p`
    color: var(--color-text-light-black);
    font-size: 2.5rem;
    text-align: center;
`;

export const Description = styled.h3`
    margin-top: 30px;
    font-size: 3rem;
    text-align: center;
`;

export const Foot = styled.div`
    position: absolute;
    bottom: 5px;
    left: 30%;
`;

export const Time = styled.div`
    font-size: 6rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > img {
        width: 5rem;
    }
`;
