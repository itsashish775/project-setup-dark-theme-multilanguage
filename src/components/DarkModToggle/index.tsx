"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className='relative flex items-center w-16 h-8 rounded-full bg-muted cursor-pointer'
    >
      {/* Static icons */}
      <div className='absolute left-2'>
        <Moon className='h-4 w-4 text-muted-foreground' />
      </div>
      <div className='absolute right-2'>
        <Sun className='h-4 w-4 text-muted-foreground' />
      </div>

      {/* Sliding knob */}
      <div
        className={`absolute top-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-1" : "left-9"
        }`}
      >
        {isDark ? (
          <Moon className='h-4 w-4 text-white' />
        ) : (
          <Sun className='h-4 w-4 text-white' />
        )}
      </div>
    </div>
  );
}
