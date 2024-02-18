'use client'
import React from 'react';
import {resultStore} from "@/store/store";
import {translateAll} from "@/apis/googleApi";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

type Props = {
    placeholder: string,
    submit: string
}

function InputBar(props: Props) {
    const {placeholder, submit} = props;
    return (
        <>
            <Input type="text" placeholder={placeholder}
                   onChange={event => resultStore.input = (event.target.value)}/>
            <Button onClick={translateAll}>{submit}</Button>
        </>
    );
}

export default InputBar;
