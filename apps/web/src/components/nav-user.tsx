import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useSessionQuery } from "@/hooks/queries/auth";
import LogoutButton from "@/pages/auth/components/logoutButton";

import { Skeleton } from "./ui/skeleton";
import { RiArrowDropUpLine } from "@remixicon/react";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { data, isPending } = useSessionQuery();
  if (isPending || !data?.data?.user) {
    return (
      <div className="flex justify-between gap-3 items-center">
        <Skeleton className="size-8 rounded-lg" />
        <div className="flex flex-col flex-auto items-end gap-1.5 py-1">
          <Skeleton className="w-1/2 h-2" />
          <Skeleton className="w-1/3 h-1.5" />
        </div>
        <Skeleton className="size-4 my-auto" />
      </div>
    );
  }
  const { user } = data.data;
  const userImageCallBack = data.data.user.name.slice(0, 2);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {user.image && <AvatarImage alt={user.name} src={user.image} />}
                <AvatarFallback className="rounded-lg uppercase">
                  {userImageCallBack}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <RiArrowDropUpLine className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel dir="ltr" className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {user.image && <AvatarImage alt={user.name} src={user.image} />}
                  <AvatarFallback className="rounded-lg uppercase">
                    {userImageCallBack}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <LogoutButton className="w-full justify-start" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
