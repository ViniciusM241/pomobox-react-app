import React from 'react';

import Header from '../../Header';
import ModalTime from '../../ModalTime';

import buttonStop from '../../../assets/buttonStop.svg';
import { Container, StyledInput, Label, Body } from './style';

export default function MainPage() {
    return(
        <>
            <Header btnIco={buttonStop} icoAlt="ButtonStop" btnName="Stop" btnTo="/" btnSecondary>
                <Container>
                    <Label htmlFor="time">Time: </Label>
                    <StyledInput type="text" name="time"> <span id="time">33:37</span> </StyledInput>
                    <Label htmlFor="pomodoris">Pomodori: </Label>
                    <StyledInput type="text" name="pomodoris"> <span id="pomodoris">2 of 5</span> </StyledInput>
                </Container>
            </Header>
            <Body>
                <ModalTime />
            </Body>
        </>
    )
}