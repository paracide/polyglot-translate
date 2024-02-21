'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '../ui/dropdown-menu';
import {Button} from "@/components/ui/button";
import {localesNames} from "@/config/config";

function LangButton() {
  const router = useRouter();
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 icon-[subway--world] text-blue-400" variant="outline"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {
          localesNames.map(v =>
            <DropdownMenuItem key={v.key} onSelect={event => router.push("/" + v.key)}>
              {v.label}
            </DropdownMenuItem>
          )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LangButton;
