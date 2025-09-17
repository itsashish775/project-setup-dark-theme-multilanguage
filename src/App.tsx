// import DarkModeToggle from './components/DarkModToggle'

// function App() {

//   return (
//     <div className='min-h-screen flex flex-col bg-background text-text transition-colors duration-300'>
//       {/* Header with toggle */}
//       <div className='flex justify-end p-4'>
//         <DarkModeToggle />
//       </div>

//       {/* Center content */}
//       <div className='flex flex-1 items-center justify-center'>
//         <h1 className='text-5xl font-bold underline p-6 rounded-lg shadow-md bg-primary text-primary-foreground'>
//           Hello World!
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default App

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App: React.FC = () => {
  console.log("App component rendered");
  
  return <RouterProvider router={router} />;
};

export default App;
