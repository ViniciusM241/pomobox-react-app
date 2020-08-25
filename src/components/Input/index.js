import React from 'react';

import { StyledInput } from './style';

export default function Input(props) {
    return (
        <>
            {/* <label for={props.name}> {props.name} </label> */}
            {props.textarea ?
                <StyledInput className="textarea" as="textarea" name={props.name} placeholder={props.name} />
            :   
                <StyledInput className="input" as="input" type={props.type} name={props.name} placeholder={props.name} />
            }
            
        </>
    );
}