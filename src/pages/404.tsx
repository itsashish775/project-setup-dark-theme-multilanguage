// src/pages/NotFound.tsx
import LoginLayout from "@/Layouts/LoginLayout";
import React from "react";
import { Link, useParams } from "react-router-dom";

const NotFound: React.FC = () => {
  const { lng } = useParams<{ lng: string }>();

  return (
    <LoginLayout>
      <div className='flex min-h-screen h-full w-full items-center justify-center bg-background p-4'>
        <div className='text-center'>
          <h1 className='mb-4 text-4xl text-primary font-bold'>404</h1>
          <p className='mb-4 text-xl text-primary'>Oops! Page not found</p>
          <a href='/' className='text-blue-500 underline hover:text-blue-700'>
            Return to Home
          </a>
        </div>
      </div>
    </LoginLayout>
  );
};

export default NotFound;
