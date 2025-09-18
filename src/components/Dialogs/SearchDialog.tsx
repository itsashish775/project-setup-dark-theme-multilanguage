
import { Button } from "@/components/ui/button";
import { MessageCircle, Search } from "lucide-react";
import { Input } from "../ui/input";

export default function MyCustomForm() {
  return (
     <div className="flex flex-col w-full">
      {/* Search bar + dropdown */}
      <div className="flex items-center gap-2 p-2 border-b">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            className="pl-8 w-full"
          />
        </div>
        <Button variant="outline" size="sm">
          All Models ▾
        </Button>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-4 p-4 overflow-y-auto">
        {/* Today */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Today
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-muted rounded-md px-2 py-1">
              <MessageCircle className="h-4 w-4" />
              <span>Greeting exchange</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-muted rounded-md px-2 py-1">
              <MessageCircle className="h-4 w-4" />
              <span>New chat</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-muted rounded-md px-2 py-1">
              <MessageCircle className="h-4 w-4" />
              <span>Intro to UX</span>
            </div>
          </div>
        </div>

        {/* Last 7 days */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Last 7 days
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-muted rounded-md px-2 py-1">
              <MessageCircle className="h-4 w-4" />
              <span>Placeholder ideas for the serial number</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


