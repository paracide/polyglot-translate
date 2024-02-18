'use client'
import React from 'react';
import {resultStore} from "@/store/store";
import {translateAll} from "@/apis/googleApi";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {NavbarItem} from "@nextui-org/navbar";
import {useTranslations} from "next-intl";

function InputBar() {
  const componentsT = useTranslations("components")
  return (
    <>
      <NavbarItem>
        <Input type="text" placeholder={componentsT("inputPlaceholder")}
               onChange={event => resultStore.input = (event.target.value)}/>
      </NavbarItem>
      <NavbarItem>
        <Button onClick={translateAll}>{componentsT("buttons.submit")}</Button>
      </NavbarItem>
    </>
  );
}

export default InputBar;
