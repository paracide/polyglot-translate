'use client'
import React from "react";
import {Label} from "@/components/ui/label";
import LangDrawer from "./LangDrawer";
import {Checkbox} from "@/components/ui/checkbox";
import {useSnapshot} from "valtio";
import {originLangStore} from "@/store/store";
import _ from "lodash";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const langSnap = useSnapshot(originLangStore);

    return (
        <LangDrawer title="Target Lang">
            <div className="grid grid-cols-2 lg:grid-cols-7">
                {langArr.map(([k, v], index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={k} value={k}
                                  checked={langSnap.targetLang.includes(k)}
                                  onCheckedChange={(checked => {
                                      const targetLang = originLangStore.targetLang;
                                      if (checked) {
                                          if (!targetLang.includes(k)) {
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
        </LangDrawer>
    );
}