import { FolderPlus, Library, Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface NavigationItemProps {
  collapsed: boolean;
}
const NavigationItem = ({ collapsed }: NavigationItemProps) => {
  const { t,i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const navigationItems = [
    { title: t("sidebar.newChat"), icon: Plus, action: true },
    { title: t("sidebar.search"), icon: Search },
    { title: t("sidebar.library"), icon: Library },
    { title: t("sidebar.createFolder"), icon: FolderPlus },
  ];
  return (
    <div className='space-y-1'>
      {navigationItems.map((item) => (
        <Button
          key={item.title}
          variant={item.action ? "default" : "ghost"}
          className={`w-full ${
            collapsed ? "justify-center px-2" : "justify-start"
          } h-10`}
          title={collapsed ? item.title : undefined}
          dir={dir}
        >
          <item.icon className='h-4 w-4' />
          {!collapsed && <span className='ml-2'>{item.title}</span>}
        </Button>
      ))}
    </div>
  );
};

export default NavigationItem;
