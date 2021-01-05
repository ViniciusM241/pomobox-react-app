import React, { useState } from 'react';

import { Container, Close, Title } from './style.js';

export default function Modal(props) {

    const [modalState, setModalState] = useState(false);

    return (
        <>
            {modalState ?
            <> 
                <Container onClick={() => setModalState(true)}>
                    <Close onClick={props.onClick}>X</Close>
                    <Title>{props.toDoName}</Title>
                </Container>
                <Title>Hello World</Title>
            </>
            //No lugar de TITLE deve ir o modal grande na tela
            //Quando esse modal fechar, o estado muda e ele desaparece.
            :
                <Container onClick={() => setModalState(true)}>
                    <Close onClick={props.onClick}>X</Close>
                    <Title>{props.toDoName}</Title>
                </Container>
            }
        </>
    );
}