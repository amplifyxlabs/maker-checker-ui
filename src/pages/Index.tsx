
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { MakerForm } from "@/components/MakerForm";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        className="shrink-0"
      />
      <main
        className={cn(
          "flex-1 p-8 transition-all duration-300 ease-in-out",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Maker Dashboard</h1>
            <p className="text-gray-500">Create and manage your requests</p>
          </div>
          <MakerForm />
        </div>
      </main>
    </div>
  );
}

export default Index;
