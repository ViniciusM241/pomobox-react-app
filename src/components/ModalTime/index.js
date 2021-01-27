import React from 'react';

import { Container, Head, LeftButton, Title, RightButton, Main, SubText, Description, Foot, Time } from './style';

import clock from '../../assets/clock.svg';
import confirm from '../../assets/confirm.svg';

export default function ModalTime() {

    return(
        <Container>
            <Head>
                <LeftButton src={confirm} alt="confirm" />
                <Title> Interval! </Title>
                <RightButton> X </RightButton>
            </Head>
            <Main>
                <SubText> Take some glass of water </SubText>
                <Description> Math: Odd and Even numbers. </Description>
            </Main>
            <Foot>
                <Time><span id="clock">03:37</span>&nbsp;<img src={clock} alt="clock" /></Time>
            </Foot>
        </Container>
    )
}