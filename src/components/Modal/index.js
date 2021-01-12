import React, { useState } from 'react';

import Button from '../Button';
import buttonGo from '../../assets/buttonGo.svg';

import { Container, Close, Title, BigModal, Description, Background } from './style.js';

export default function Modal(props) {

    const [modalState, setModalState] = useState(false);

    const editThis = (id) => {
        props.setInput(props.toDoObject);
        setModalState(false);
    }

    return (
        <>
            {modalState &&
            <>
                <Background onClick={() => setModalState(false)}></Background>
                <BigModal>
                    <Close onClick={() => setModalState(false)}>X</Close>
                    <Title>{props.toDoObject.Name}</Title>
                    <Description>{props.toDoObject.Description}</Description>
                    <Button ico={buttonGo} onClick={() => editThis(props.toDoObject.Id)}>Edit This</Button>
                </BigModal>
            </>
            }
            <Container onClick={() => setModalState(true)}>
                <Close onClick={props.onClick}>X</Close>
                <Title>{props.toDoObject.Name}</Title>
            </Container>
        </>
    );
}