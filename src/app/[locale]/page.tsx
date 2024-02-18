'use client'
import ResultCard from '@/components/shared/ResultCard';
import React, {useEffect} from "react";
import {persistStore} from "@/store/store";
import {subscribe, useSnapshot} from "valtio";

export default function IndexPage() {
  const storageSnap = useSnapshot(persistStore);
  const myStateKey = "config";

  //only read the config from localstorage when load the page or refresh
  useEffect(() => {
    const storedState = localStorage.getItem(myStateKey);
    if (storedState) {
      Object.assign(persistStore, JSON.parse(storedState));
    }
  }, [])

  subscribe(persistStore, () => localStorage.setItem(myStateKey, JSON.stringify(persistStore)))

  return (
    <main className="container grid gap-4 grid-cols-1 md:grid-cols-3  ">
      {
        storageSnap.targetLang.map(lang =>
          <ResultCard key={lang} lang={lang}/>
        )
      }
    </main>
  );
}
