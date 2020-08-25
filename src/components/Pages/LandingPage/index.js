import React from 'react';

import Button from '../../Button';

import buttonGo from '../../../assets/buttonGo.svg';
import logo from '../../../assets/logo.svg';
import tomato from '../../../assets/tomato.svg';

import { Container, Main, LogoContainer, Image, ButtonContainer, Foot } from './style';

export default function LandingPage() {
    return (
        <Container>
            <Main>
                <LogoContainer>
                    <img src={logo} alt="Logo PomoBox" />
                    <h2>Your Pomodoro in <span>boxes.</span></h2>
                </LogoContainer>
                <Image as="img" src={tomato} alt="Tomato Image" />
                <ButtonContainer>
                    <Button to="/ToDoPage" className="bt1" ico={buttonGo} alt="ButtonGo"> Let's Go</Button>
                    <Button to="/" className="bt2" ico={buttonGo} alt="ButtonGo" secondary> Know More</Button>
                </ButtonContainer>
                <Foot>Developed by Vinícius</Foot>
            </Main>
        </Container>
    );
}