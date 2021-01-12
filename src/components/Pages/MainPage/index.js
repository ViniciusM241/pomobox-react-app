import React from 'react';

import Header from '../../Header';
import Input from '../../Input';

import buttonStop from '../../../assets/buttonStop.svg';
import { StyledInput } from '../../Input/style';

export default function MainPage() {
    return(
        <>
            <Header btnIco={buttonStop} icoAlt="ButtonStop" btnName="Stop" btnTo="/" btnSecondary>
                <StyledInput as={Input} type="text" name="time" value="03:15">Time: </StyledInput>
                <StyledInput as={Input} type="text" name="pomodori" value="2 of 5">Pomodori: </StyledInput>
            </Header>
        </>
    )
}