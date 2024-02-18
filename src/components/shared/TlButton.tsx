'use client'
import React from "react";
import {useSnapshot} from "valtio";
import {persistStore} from "@/store/store";
import _ from "lodash";
import {translateOne} from "@/apis/googleApi";
import {Checkbox, CheckboxGroup} from "@nextui-org/checkbox";
import LangDrawer from "./LangDrawer";

type Props = {
    langArr: Array<[string, string]>
}

export default function OlButton({langArr}: Props) {
    const langSnap = useSnapshot(persistStore);
    return (
        <LangDrawer title="Target">
            <CheckboxGroup label="Select cities"
                           orientation="horizontal"
                           color="secondary">
                {langArr.map(([k, v], index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={k} value={k}
                                  checked={langSnap.targetLang.includes(k)}
                                  onChange={(checked => {
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
                    </div>
                ))}
            </CheckboxGroup>
        </LangDrawer>


    );
}
