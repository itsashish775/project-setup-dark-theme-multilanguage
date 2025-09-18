import React, { useState } from "react";
import { Menu, ChevronDown, User, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppSidebar } from "./sidebar";
import DarkModeToggle from "../DarkModToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import MyAccount from "../Sidebar/MyAccount";

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

export function DashboardHeader({
  onToggleSidebar,
  sidebarCollapsed,
}: DashboardHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='h-14 border-b border-border bg-background flex items-center justify-between px-4'>
      <div className='flex items-center gap-2'>
        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='lg:hidden'>
              <Menu className='h-4 w-4' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='p-0 w-64'>
            <AppSidebar
              collapsed={false}
              onToggle={() => setMobileMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar Toggle */}
        <Button
          variant='ghost'
          size='icon'
          onClick={onToggleSidebar}
          className='hidden'
        >
          <Menu className='h-4 w-4' />
        </Button>

        {/* Model Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='gap-2'>
              <span className='w-2 h-2 bg-green-500 rounded-full'></span>
              GPT-4o Mini
              <ChevronDown className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>GPT-4o Mini</DropdownMenuItem>
            <DropdownMenuItem>GPT-4o</DropdownMenuItem>
            <DropdownMenuItem>GPT-3.5 Turbo</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className='flex items-center gap-4'>
        {/* Language Selector */}

        <DarkModeToggle />
        <LanguageSwitcher />

        {/* User Menu */}
        {/* <MyAccount /> */}
      </div>
    </header>
  );
}
