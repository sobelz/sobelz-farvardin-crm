import { Outlet } from "react-router";

import { AppSidebar } from "@/components/app-sidebar";
import MainHeader from "@/components/main-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar side="right" />
      <SidebarInset className="overflow-hidden">
        <MainHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
