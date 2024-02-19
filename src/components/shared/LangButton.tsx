'use client'
import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {localesNames} from "@/config/config";
import {useRouter} from "next/navigation";

function LangButton() {
  const router = useRouter();


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly className="h-6 icon-[subway--world]" variant="solid"/>
      </DropdownTrigger>
      <DropdownMenu onAction={v => router.push("/" + v)}
                    variant="faded" aria-label="Languages" items={localesNames}>
        {(localesNames) => (
          <DropdownItem key={localesNames.key} textValue={localesNames.label}>
            {localesNames.label}
          </DropdownItem>
        )
        }
      </DropdownMenu>)
    </Dropdown>
  );
}

export default LangButton;
