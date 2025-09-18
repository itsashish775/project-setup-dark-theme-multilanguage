"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className='relative flex items-center w-18 h-11 rounded-[12px] bg-[] cursor-pointer border border-border'
    >
      {/* Static icons */}
      <div className='absolute left-2'>
        <Moon className='h-4 w-5 text-muted-foreground' />
      </div>
      <div className='absolute right-2'>
        <Sun className='h-4 w-5 text-muted-foreground' />
      </div>

      {/* Sliding knob */}
      <div
        className={`absolute top-1 h-8 w-8 rounded-xl bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-1" : "left-9"
        }`}
      >
        {isDark ? (
          <Moon className='h-4 w-5 text-white' />
        ) : (
          <Sun className='h-4 w-5 text-white' />
        )}
      </div>
    </div>
  );
}
