import React from 'react';

import { Container, Close } from './style.js';

export default function Modal(props) {

    return (
        <>
            <Container>
                <Close>X</Close>
                {props.toDoName}
            </Container> 
        </>
    );
}