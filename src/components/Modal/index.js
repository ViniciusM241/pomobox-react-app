import React from 'react';

import { Container, Close, Title } from './style.js';

export default function Modal(props) {

    return (
        <>
            <Container>
                <Close onClick={props.onClick}>X</Close>
                <Title>{props.toDoName}</Title>
            </Container> 
        </>
    );
}