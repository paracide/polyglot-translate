// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MdLightMode, MdOutlineLightMode} from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div onClick={() => {
      setTheme(darkMode ? 'light' : 'dark');
      setDarkMode(!darkMode);
    }}>
      {darkMode ? <MdLightMode/> : <MdOutlineLightMode/>}
    </div>
  )
}
