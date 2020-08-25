import React from 'react';
import { Link } from 'react-router-dom';

import Container from './style';


// import buttonGo from '../../assets/buttonGo.svg';

export default function Button(props) {
    
    return (
        <Link to={props.to}>
            <Container secondary={props.secondary}>
                <img src={props.ico} alt={props.alt} />
                {props.children}
            </Container>
        </Link>
    );
}