import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { Footer } from "@/components/footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider
      suppressHydrationWarning
      className="flex min-h-screen bg-background"
    >
      {/* Sidebar */}
      <DashboardSidebar />
      <SidebarInset className="flex w-full flex-1 flex-col overflow-hidden">
        <div className="h-full">
          {/* Header */}
          <DashboardHeader />
          <div className="flex">{children}</div>
        </div>
        {/* Footer */}
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
