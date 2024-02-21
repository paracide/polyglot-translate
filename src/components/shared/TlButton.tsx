'use client'
import React from "react";
import {Label} from "@/components/ui/label";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";
import _ from "lodash";
import {translateOne} from "@/apis/googleApi";
import LangModal from "@/components/shared/LangModal";
import {Checkbox} from "../ui/checkbox";

type Props = {
  langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
  const langSnap = useSnapshot(persistStore);

  return (
    <LangModal title="Target Lang">
      <div className="grid grid-cols-2 lg:grid-cols-7">
        {langArr.map(([k, v], index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={k} value={k}
                      checked={langSnap.targetLang.includes(k)}
                      onCheckedChange={(checked => {
                        const targetLang = persistStore.targetLang;
                        if (checked) {
                          if (!targetLang.includes(k)) {
                            translateOne(k);
                            targetLang.push(k)
                          }
                        } else {
                          _.remove(targetLang, value => value === k);
                        }
                      })}/>
            <Label
              htmlFor={k}
              className="text-sm font-medium leading-none
                            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >{v}
            </Label>
          </div>
        ))}
      </div>
    </LangModal>
  );
}
