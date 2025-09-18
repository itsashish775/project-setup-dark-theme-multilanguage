import { FolderPlus, Library, Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DemoPage from "../Dialogs/SearchDialog";
import DialogSkeleton from "../Dialogs";
import MyCustomForm from "../Dialogs/SearchDialog";

interface NavigationItemProps {
  collapsed: boolean;
  onToggle: () => void;
}

const NavigationItem = ({ collapsed, onToggle }: NavigationItemProps) => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const [openNewSearchDialog, setOpenNewSearchDialog] =
    useState<boolean>(false);

  // Example click handlers
  const handleNewChat = () => {
    console.log("New Chat clicked");
    setOpenNewSearchDialog(true);
    // onToggle();
    // open dialog, route change, or state update here
  };

  const handleSearch = () => {
    console.log("Search clicked");
    // onToggle();
  };

  const handleLibrary = () => {
    console.log("Library clicked");
  };

  const handleCreateFolder = () => {
    console.log("Create Folder clicked");
  };

  const navigationItems = [
    {
      title: t("sidebar.newChat"),
      icon: Plus,
      action: true,
      onClick: handleNewChat,
    },
    { title: t("sidebar.search"), icon: Search, onClick: handleSearch },
    { title: t("sidebar.library"), icon: Library, onClick: handleLibrary },
    {
      title: t("sidebar.createFolder"),
      icon: FolderPlus,
      onClick: handleCreateFolder,
    },
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
          onClick={item.onClick}
        >
          <item.icon className='h-4 w-4' />
          {!collapsed && <span className='ml-2'>{item.title}</span>}
        </Button>
      ))}
      <div className=''>
        <DialogSkeleton
          open={openNewSearchDialog}
          onOpenChange={setOpenNewSearchDialog}
        >
          <MyCustomForm />
        </DialogSkeleton>
      </div>
    </div>
  );
};

export default NavigationItem;
