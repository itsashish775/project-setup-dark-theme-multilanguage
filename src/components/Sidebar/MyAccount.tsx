import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ChevronRight, LogOut, Settings, User } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { useLogoutMutation } from "@/ReduxStore/reducers/auth/auth.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface MyAccountProps {
  collapsed: boolean;
}

const MyAccount = ({ collapsed }: MyAccountProps) => {
  const [userLogout] = useLogoutMutation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const logout = async () => {
    console.log(i18n, "         ------------->");

    console.log("Logging out...");
    try {
      const result: any = await userLogout().unwrap();
      if (result.success) {
        toast.success("Logged out successfully");
        console.log(
          "Logout successful, redirecting to login...",
          `/${i18n.language}/login`
        );

        setTimeout(() => navigate(`/${i18n.language}/login`,{ replace: true }), 2000);
      }
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Logout failed:", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='flex w-full justify-between'
        >
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
              <User className='h-3 w-3 text-primary-foreground' />
            </div>
            {!collapsed && (
              <span className='hidden sm:inline'>Ananya Singh</span>
            )}
          </div>
          <ChevronRight className='h-4 w-4 mr-2' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <Settings className='h-4 w-4 mr-2' />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User className='h-4 w-4 mr-2' />
          Usage
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>
          <LogOut className='h-4 w-4 mr-2' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyAccount;
