'use client'
import {redirect} from 'next/navigation';
import {useEffect} from "react";
import {persistStore, STATE_KEY} from "@/store/store";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  //only read the constant from localstorage when load the page or refresh
  useEffect(() => {
    const storedState = localStorage.getItem(STATE_KEY);
    if (storedState) {
      Object.assign(persistStore, JSON.parse(storedState));
    }
  }, [])

  redirect('/en');
}
