
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ className, isCollapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("maker");

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
            {!isCollapsed && (
              <span className="text-lg font-semibold text-sidebar-foreground">Menu</span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={onToggle}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          <nav className="flex-1 p-2">
            <div className="space-y-1">
              <Button
                variant={activeItem === "maker" ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed ? "px-2" : "px-4"
                )}
                onClick={() => setActiveItem("maker")}
              >
                {isCollapsed ? "M" : "Maker"}
              </Button>
              <Button
                variant={activeItem === "checker" ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed ? "px-2" : "px-4"
                )}
                onClick={() => setActiveItem("checker")}
              >
                {isCollapsed ? "C" : "Checker"}
              </Button>
            </div>
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50",
                isCollapsed ? "px-2" : "px-4"
              )}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {!isCollapsed && "Logout"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
