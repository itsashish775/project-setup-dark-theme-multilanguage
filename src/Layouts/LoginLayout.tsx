import DarkModeToggle from "@/components/DarkModToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen bg-primary flex flex-col items-center justify-center px-4'>
      {/* Top right corner language switcher */}
      <div className='absolute top-4 right-4 flex gap-4'>
        <LanguageSwitcher />
        <DarkModeToggle />
      </div>
      <div>
        
      </div>

      {/* Login card / modal */}
      <div
        className='w-full max-w-md p-6  rounded-2xl '
      >
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
