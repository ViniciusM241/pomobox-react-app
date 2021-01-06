import React, { useState } from 'react';

import Button from '../Button';
import buttonGo from '../../assets/buttonGo.svg';

import { Container, Close, Title, BigModal, Description, Background } from './style.js';

export default function Modal(props) {

    const [modalState, setModalState] = useState(false);

    return (
        <>
            {modalState &&
            <>
                <Background onClick={() => setModalState(false)}></Background>
                <BigModal>
                    <Close onClick={() => setModalState(false)}>X</Close>
                    <Title>{props.toDoName}</Title>
                    <Description>{props.toDoDescription}</Description>
                    <Button ico={buttonGo}>Edit This</Button>
                </BigModal>
            </>
            }
            <Container onClick={() => setModalState(true)}>
                <Close onClick={props.onClick}>X</Close>
                <Title>{props.toDoName}</Title>
            </Container>
        </>
    );
}