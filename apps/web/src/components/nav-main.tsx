import { NavLink, useMatch } from "react-router";

import type {
  SidebarMainMenu,
  SidebarMainMenuItem,
  SidebarMainMenuItemWithChildren,
} from "@/types/menu";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { Spinner } from "./ui/spinner";
import { RiArrowLeftSLine } from "@remixicon/react";

const SubMenuItem = ({ title, url }: SidebarMainMenuItemWithChildren["items"][0]) => {
  return (
    <SidebarMenuSubItem key={title}>
      <SidebarMenuSubButton>
        <NavLink end className="relative" to={url}>
          {({ isActive, isPending }) => (
            <>
              <span
                className={cn("link-indicator", {
                  "active-link": isActive,
                })}
              >
                {title}
              </span>
              {isPending && <Spinner className="absolute inset-e-0" />}
            </>
          )}
        </NavLink>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

const NavItemWithSubMenu = (item: SidebarMainMenuItemWithChildren) => {
  const { items, title, icon: Icon, base } = item;
  const isMatch = useMatch(base);
  return (
    <Collapsible className="group/collapsible" defaultOpen={!!isMatch} key={title}>
      <SidebarMenuItem>
        <CollapsibleTrigger>
          <SidebarMenuButton tooltip={title}>
            {Icon && <Icon className={cn({ "text-primary": !!isMatch })} />}
            <span>{title}</span>
            <RiArrowLeftSLine className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem) => (
              <SubMenuItem key={subItem.url + subItem.title} {...subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavItemWithoutSubMenu = (item: SidebarMainMenuItem) => {
  const { title, url, icon: Icon } = item;
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton tooltip={title}>
        <NavLink className="relative" to={url}>
          {({ isActive, isPending }) => (
            <>
              {Icon && <Icon className={cn({ "text-primary": isActive })} />}
              <span>{title}</span>
              {isPending && <Spinner className="absolute inset-e-0" />}
            </>
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function NavMenu({ items, title }: { title: string; items: SidebarMainMenu[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          if (item.items) return <NavItemWithSubMenu key={item.title} {...item} />;
          else return <NavItemWithoutSubMenu key={item.title + item.url} {...item} />;
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
