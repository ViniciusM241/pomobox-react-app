import styled from 'styled-components';

const Container = styled.button`
    width: 30rem;
    height: 8rem;
    margin: 1.5rem 0;
    border: 0;
    border-radius: .8rem;
    background: ${props => props.secondary ?
                'var(--color-button-secondary)':
                'var(--color-button-primary)'
                };
    color: var(--color-text-white);
    cursor: pointer;
    transition: background .2s;
    
    font: 700 3rem 'Roboto';
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1.5rem;
    }

    &:hover {
        background: ${props => props.secondary ?
                'var(--color-button-secondary-dark)':
                'var(--color-button-primary-dark)'
        };
    }

    &:focus {
        outline: none;
    }
`;

export default Container;