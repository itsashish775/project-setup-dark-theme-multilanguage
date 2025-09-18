import DarkModeToggle from "@/components/DarkModToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden'>
      {/* Background image as <img> */}
      <img
        src='/asg-bgImage.png'
        alt='Background'
        className='absolute top-0 w-full h-screen object-fill -z-10 scale-100'
      />

      {/* Top right corner language switcher */}
      <div className='absolute top-4 right-4 flex gap-4'>
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>

      

      {/* Login card / modal */}
      <div className='w-full p-6 flex justify-center rounded-2xl'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
