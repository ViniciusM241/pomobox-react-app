import React from 'react';

import { StyledInput, Label } from './style';

export default function Input(props) {

    const onParentChange = (e) => {
        props.onChange(e);
    }

    return (
        <>
            <Label htmlFor={props.name}>{props.children}</Label>
            {props.textarea ?
                <StyledInput onChange={onParentChange.bind(this)} as="textarea" className="textarea" name={props.name} placeholder={props.name} value={props.value} />
            :   
                <StyledInput onChange={onParentChange.bind(this)} type={props.type} name={props.name} placeholder={props.name} value={props.value} />
            }
            
        </>
    );
}