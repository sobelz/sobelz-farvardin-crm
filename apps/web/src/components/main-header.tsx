import { Separator } from "@/components/ui/separator";

import RouteBreadcrumb from "./route-breadcrumb";
import ThemeToggler from "./theme-toggler";
import { SidebarTrigger } from "./ui/sidebar";

const MainHeader = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-me-1" />
        <ThemeToggler />
        <Separator className="ms-2 data-[orientation=vertical]:h-4" orientation="vertical" />
        <RouteBreadcrumb />
      </div>
    </header>
  );
};

export default MainHeader;
