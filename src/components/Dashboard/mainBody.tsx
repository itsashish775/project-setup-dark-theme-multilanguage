import React from "react";
import {
  FileText,
  Sparkles,
  Tag,
  Search,
  GitCompare,
  Video,
  Wand2,
  Image,
  BarChart3,
  Plus,
  Mic,
  SendHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";

const features = [
  {
    title: "Content Summarization",
    description: "Summarize your content faster",
    icon: FileText,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Content Generation",
    description: "Auto-generate GPT-4o",
    icon: Sparkles,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Document Tagging",
    description: "Understand GPT-4 Turbo",
    icon: Tag,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Search",
    description: "Internet with ChatGPT",
    icon: Search,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Evaluation & Compare",
    description: "Compare Documents",
    icon: GitCompare,
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Video Generation",
    description: "Auto-generate GPT-4",
    icon: Video,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Wave Generation",
    description: "Generate with creative waves",
    icon: Wand2,
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Image Generation",
    description: "Bussiness.cloud with AI",
    icon: Image,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Data Analytics & Insights",
    description: "Understand GPT-4 Turbo",
    icon: BarChart3,
    color: "bg-amber-500/10 text-amber-500",
  },
];

export function DashboardContent() {
  const [message, onChangeMessage] = React.useState("");
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const dir = currentLocale === "ar" ? "rtl" : "ltr";
  return (
    <div className='max-w-4xl  mx-auto' dir={dir}>
      {/* Welcome Message */}
      <ScrollArea className=' h-[calc(100vh-200px)]'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold text-foreground mb-2'>
            Hello, Ananya
          </h1>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
          {features.map((feature) => (
            <Card
              key={feature.title}
              className='p-4 hover:shadow-lg transition-shadow cursor-pointer group bg-card border-border'
              dir={dir}
            >
              <div className='flex items-start gap-3'>
                <div
                  className={`p-2 rounded-lg ${feature.color} group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className='h-5 w-5' />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='font-medium text-card-foreground mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* Chat Input */}
      <div
        className='p-4 border-t border-border'
        // dir={currentLocale === "ar" ? "rtl" : "ltr"}
      >
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center gap-2 bg-sidebar rounded-lg border border-border p-2'>
            <Button size='sm' variant='default'>
              <Plus className='w-4 h-4' />
            </Button>
            <Input
              value={message}
              onChange={(e) => onChangeMessage(e.target.value)}
              placeholder={t("placeholder")}
              className='flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
            />
            <Button size='sm' variant='default'>
              <Mic className='w-4 h-4' />
            </Button>
            <Button size='sm' variant={"default"}>
              <SendHorizontal className='w-4 h-5' />
            </Button>
          </div>

          {/* <div className='text-center mt-2'>
          <p className='text-xs text-muted-foreground'>
            {t("footer")}{" "}
            <span className='text-secondary ml-1'>{t("privacy")}</span>
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
