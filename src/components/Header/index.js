import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { Container, Head, Main, Image } from './style';

import logo from '../../assets/logo.svg';
import tomato from '../../assets/tomato.svg';

export default function Header(props){

    const messageBox = () =>{
        alert('Olá, sou o pomodoro. Vamos estudar?');
    }
    return (
        <Container>
            <Head>
                <Link to="/">
                    <img src={logo} alt="Logo PomoBox" />
                </Link>
                <Button to="/" ico={props.btnIco} alt={props.icoAlt} secondary={props.btnSecondary ? true : false}> {props.btnName} </Button>
            </Head>
            <Main>
                {props.children}
                <Image src={tomato} onClick={() => messageBox()} />
            </Main>
        </Container>
    );   
}