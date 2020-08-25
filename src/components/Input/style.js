import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 50rem;
    height: 8rem;
    margin: 1.5rem 0;
    padding: 1rem;
    border: 0;
    border-radius: .8rem;
    background: var(--color-primary-light);

    ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    color: var(--color-text-white);
    font: 500 3rem 'Roboto';

    &.textarea {
        height: 15rem;
    }

    &:focus {
        outline: none;
    }
`;
