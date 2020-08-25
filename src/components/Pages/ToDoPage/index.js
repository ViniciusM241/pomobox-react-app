import React from 'react';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';

import buttonGo from '../../../assets/buttonGo.svg';

export default function ToDoPage() {
    
    return (
        <>
            <Header btnIco={buttonGo} icoAlt="ButtonIco" btnName="Start">
                <Input type="text" name="Name" />
                <Input textarea name="Description" />
                <Button to="/ToDoPage" ico={buttonGo} alt="ButtonIco" secondary> Add </Button>
            </Header>
        </>
    );
}