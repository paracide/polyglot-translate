'use client'
import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {localesNames} from "@/config/config";
import {Link} from "@/i18n";

function LangButton() {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly className="h-6 icon-[subway--world]" variant="solid"/>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" items={localesNames}>
        {(localesNames) => (
          <DropdownItem key={localesNames.key} textValue={localesNames.label}>
            <Link href="/" locale={localesNames.key}>{localesNames.label}</Link>
          </DropdownItem>
        )
        }
      </DropdownMenu>)
    </Dropdown>
  );
}

export default LangButton;
