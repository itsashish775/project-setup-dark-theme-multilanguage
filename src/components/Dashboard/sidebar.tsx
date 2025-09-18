import {
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationItem from "../Sidebar/NavigationItem";
import RecentItem from "../Sidebar/RecentItems";
import MyAccount from "../Sidebar/MyAccount";

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ collapsed, onToggle }: Readonly<AppSidebarProps>) {
  return (
    <div
      className={`relative bg-card border-r border-border transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } h-screen flex flex-col`}
    >
      {/* Toggle Button - Hidden on mobile since sidebar is hidden */}
      <Button
        variant='ghost'
        size='icon'
        onClick={onToggle}
        className='absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-background shadow-md hover:bg-accent hidden lg:flex'
      >
        <ChevronLeft
          className={`h-3 w-3 transition-transform ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </Button>

      <ScrollArea className='h-full'>
        <div className='p-4'>
          {/* Logo/Brand */}
          <div className='mb-6'>
            <div className='flex items-center gap-2'>
              {/* Arabic Logo */}

              {/* English Logo (hidden if collapsed) */}
              {!collapsed ? (
                <div className='w-50 h-10 flex items-center justify-center'>
                  <img
                    src='/asg-full-logo-light.svg'
                    alt='English Logo'
                    className='w-full h-full object-contain'
                  />
                </div>
              ) : (
                <div className='w-8 h-8 flex items-center justify-center'>
                  <img
                    src='/asg-short-logo.svg'
                    alt='Arabic Logo'
                    className='w-full h-full object-contain'
                  />
                </div>
              )}
            </div>
          </div>

          {/* Main Navigation */}
          <NavigationItem collapsed={collapsed} onToggle={onToggle} />

          {/* Recent */}
          <RecentItem collapsed={collapsed} onToggle={onToggle} />
        </div>
      </ScrollArea>
      <div className='border-t border-border py-4'>
        <MyAccount collapsed={collapsed} />
      </div>
    </div>
  );
}
