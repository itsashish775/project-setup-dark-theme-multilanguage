import React, { useState } from "react";
import {
  Library,
  FolderPlus,
  MessageSquare,
  Plus,
  Search,
  Settings,
  ChevronRight,
  Menu,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DarkModeToggle from "@/components/DarkModToggle";

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarItems = [
    { icon: Plus, label: "New Chat", action: () => {} },
    { icon: Search, label: "Search", action: () => {} },
    { icon: MessageSquare, label: "Live Chats", action: () => {} },
    { icon: Library, label: "Library", action: () => {} },
    { icon: FolderPlus, label: "Create Folder", action: () => {} },
    { icon: Settings, label: "Settings", action: () => {} },
  ];

  return (
    <div className='flex h-screen bg-gray-900 text-white'>
      {/* Sidebar */}
      <div
        className={`
          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          ${sidebarCollapsed ? "w-16" : "w-64"}
          fixed lg:relative z-50 h-full bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300 ease-in-out
        `}
      >
        {/* Logo + Collapse Button */}
        <div className='p-4 border-b border-gray-700 flex items-center justify-between'>
          <img
            src='/asg-logo.png'
            alt='ASG Logo'
            className={`object-contain ${
              sidebarCollapsed ? "w-8 h-8" : "w-40 h-10"
            } transition-all duration-200`}
          />
          <button
            className='hidden lg:block p-2 hover:bg-gray-700 rounded'
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <ChevronRight
              className={`w-5 h-5 transform transition-transform ${
                sidebarCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Sidebar Items */}
        <div className='flex-1 p-2 space-y-1 overflow-y-auto'>
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`flex items-center ${
                sidebarCollapsed
                  ? "justify-center w-12 h-12"
                  : "w-full px-4 py-2"
              } hover:bg-gray-700 rounded transition-colors`}
            >
              <item.icon className='w-5 h-5' />
              {!sidebarCollapsed && (
                <span className='ml-3 text-sm'>{item.label}</span>
              )}
            </button>
          ))}
        </div>

        {/* Bottom User */}
        <div className='p-4 border-t border-gray-700 flex items-center gap-2'>
          <div className='w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center'>
            AS
          </div>
          {!sidebarCollapsed && (
            <span className='text-sm font-medium'>Ashish</span>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700'>
          {/* Mobile Menu Toggle */}
          <button
            className='lg:hidden p-2 hover:bg-gray-700 rounded'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className='w-6 h-6' />
          </button>

          <h1 className='text-lg font-semibold'>Dashboard</h1>

          {/* User Controls */}
          <div className='flex items-center gap-4'>
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 p-6 overflow-y-auto'>
          {children || (
            <div className='text-center'>
              <h2 className='text-2xl font-bold mb-2'>Welcome to ASG AI</h2>
              <p className='text-gray-400'>
                A modern dashboard layout built with React + Vite + Tailwind.
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className='flex items-center px-4 py-3 bg-gray-800 border-t border-gray-700'>
          <input
            type='text'
            placeholder="Ask questions, or type '/' for commands"
            className='flex-1 bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none'
          />
          <button className='bg-cyan-600 px-4 py-2 rounded-r hover:bg-cyan-700'>
            Send
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
