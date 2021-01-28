import React, { useEffect, useState }from 'react';

import Header from '../../Header';
import ModalTime from '../../ModalTime';

import buttonStop from '../../../assets/buttonStop.svg';
import { Container, StyledInput, Label, Body } from './style';

export default function MainPage() {

    const seconds = new Date();

    const [toDoList, setToDoList] = useState([]);
    const [second, setSecond] = useState(seconds);

    useEffect(() => {
        if(localStorage.hasOwnProperty("toDoArray"))
             setToDoList(JSON.parse(localStorage.getItem("toDoArray")));
        else
            alert("There are no ToDo's to Do");
    }, []);

    setInterval(() => {
        setSecond(second + 1);
    }, 1000);

    return(
        <>
            <Header btnIco={buttonStop} icoAlt="ButtonStop" btnName="Stop" btnTo="/" btnSecondary>
                <Container>
                    <Label htmlFor="time">Time: </Label>
                    <StyledInput type="text" name="time"> <span id="time">{second}</span> </StyledInput>
                    <Label htmlFor="pomodoris">Pomodori: </Label>
                    <StyledInput type="text" name="pomodoris"> <span id="pomodoris">2 of 5</span> </StyledInput>
                </Container>
            </Header>
            <Body>
                {toDoList && toDoList.map(elem => 
                    <ModalTime name={elem.Name} key={elem.Id} />
                )}
            </Body>
        </>
    )
}