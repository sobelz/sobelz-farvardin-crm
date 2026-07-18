"use client";

import * as React from "react";

import { NavMenu } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AdminNav, MainNav } from "@/constants/sidebar";
import { useSessionQuery } from "@/hooks/queries/auth";

import AppInfo from "./app-info";
import { ScrollArea } from "./ui/scroll-area";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data } = useSessionQuery();
  return (
    <Sidebar side="right" variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <AppInfo />
      </SidebarHeader>
      <SidebarContent className="pe-2">
        <ScrollArea dir="rtl" className="max-h-full">
          <NavMenu items={MainNav} title="منو اصلی" />
          {data?.data?.user?.role === "admin" && <NavMenu items={AdminNav} title="منو ادمین" />}
          {/* <NavProjects projects={projects} /> */}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
