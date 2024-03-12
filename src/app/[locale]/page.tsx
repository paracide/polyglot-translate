'use client'
import ResultCard from '@/components/shared/ResultCard';
import React, {useEffect} from "react";
import {persistStore, STATE_KEY} from "@/store/store";
import {useSnapshot} from "valtio";
import SearchCard from "@/components/shared/SearchCard";

export default function IndexPage() {
  const storageSnap = useSnapshot(persistStore);
  //only read the constant from localstorage when load the page or refresh
  useEffect(() => {
    const storedState = localStorage.getItem(STATE_KEY);
    if (storedState) {
      Object.assign(persistStore, JSON.parse(storedState));
    }
  }, [])


  return (
    <main className="wrapper min-h-screen grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-3">
      <SearchCard/>
      {
        storageSnap.targetLang.map(lang =>
          <ResultCard key={lang} lang={lang}/>
        )
      }
    </main>
  );
}
