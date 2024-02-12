'use client'
import React from 'react';
import {Input} from '../ui/input';
import {Button} from "@/components/ui/button";
import {resultStore} from "@/store/store";

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
            <Button type="submit">{submit}</Button>
        </>
    );
}

export default InputBar;
