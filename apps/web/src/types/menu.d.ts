import type { ClassValue } from "clsx";
import type { FC } from "react";

export type Icon = RemixiconProps;

export interface SidebarMainMenuItem {
  title: string;
  url: string;
  icon?: Icon;
  items?: undefined;
}
export interface SidebarMainMenuItemWithChildren {
  title: string;
  url?: undefined;
  base: `${string}/*`;
  icon?: Icon;
  items: {
    title: string;
    url: `${string}/`;
  }[];
}

export type SidebarMainMenu = SidebarMainMenuItem | SidebarMainMenuItemWithChildren;
