import {  MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const recentItems = [
  { title: "Design Mockup", subtitle: "3 days ago · GPT-4o" },
  { title: "Design Mockup", subtitle: "3 days ago · GPT-4o" },
];
interface RecentItemProps {
  collapsed: boolean;
  onToggle: () => void;
}
const RecentItem = ({ collapsed,onToggle }: RecentItemProps) => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      {!collapsed && (
        <div className='mt-6' dir={dir}>
          <h3 className='text-muted-foreground text-xs uppercase tracking-wide mb-2 px-2'>
            {t("sidebar.recentItems")}
          </h3>
          <div className='space-y-1'>
            {recentItems.map((item, index) => (
              <Button
                key={item.title + index}
                dir={dir}
                variant='ghost'
                className='w-full justify-start h-auto p-2 hover:bg-accent group'
              >
                <MessageSquare className='h-4 w-4 text-muted-foreground mr-2 flex-shrink-0' />
                <div className='min-w-0 text-left'>
                  <div className='text-sm text-foreground truncate'>
                    {item.title}
                  </div>
                  <div className='text-xs text-muted-foreground truncate'>
                    {item.subtitle}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentItem;
