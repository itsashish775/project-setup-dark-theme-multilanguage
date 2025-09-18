import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { Settings, User } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

const MyAccount = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='gap-2'>
          <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
            <User className='h-3 w-3 text-primary-foreground' />
          </div>
          <span className='hidden sm:inline'>Ananya Singh</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <User className='h-4 w-4 mr-2' />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className='h-4 w-4 mr-2' />
          Settings
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyAccount;
