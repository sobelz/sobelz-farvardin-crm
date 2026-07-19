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
import type {
  SidebarMainMenu,
  SidebarMainMenuItem,
  SidebarMainMenuItemWithChildren,
} from "@/types/menu";
import { RiArrowLeftSLine } from "@remixicon/react";
import { NavLink, useMatch } from "react-router";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";

const SubMenuItem = ({ title, url }: SidebarMainMenuItemWithChildren["items"][0]) => {
  return (
    <SidebarMenuSubItem key={title}>
      <SidebarMenuSubButton
        render={
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
        }
      ></SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

const NavItemWithSubMenu = (item: SidebarMainMenuItemWithChildren) => {
  const { items, title, icon: Icon, base } = item;
  const isMatch = useMatch(base);
  return (
    <Collapsible
      className="group/collapsible"
      defaultOpen={!!isMatch}
      key={title}
      render={<SidebarMenuItem />}
    >
      <CollapsibleTrigger
        render={
          <SidebarMenuButton tooltip={item.title} className="cursor-pointer" isActive={!!isMatch} />
        }
      >
        {Icon && <Icon className={cn({ "text-primary": !!isMatch })} />}
        <span>{item.title}</span>
        <RiArrowLeftSLine className="ms-auto transition-transform duration-200 group-data-open/collapsible:-rotate-90" />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          {items.map((subItem) => (
            <SubMenuItem key={subItem.url + subItem.title} {...subItem} />
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
};

const NavItemWithoutSubMenu = (item: SidebarMainMenuItem) => {
  const { title, url, icon: Icon } = item;
  const isMatch = useMatch(url);
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton
        className="cursor-pointer relative"
        isActive={!!isMatch}
        render={
          <NavLink to={url}>
            {({ isActive, isPending }) => (
              <>
                {Icon && <Icon className={cn({ "text-primary": isActive })} />}
                <span>{title}</span>
                {isPending && <Spinner className="absolute inset-e-0" />}
              </>
            )}
          </NavLink>
        }
      ></SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function NavMain({ title, items }: { title: string; items: SidebarMainMenu[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu className="gap-2">
        {items.map((item) => {
          if (item.items) return <NavItemWithSubMenu key={item.title} {...item} />;
          else return <NavItemWithoutSubMenu key={item.title + item.url} {...item} />;
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
