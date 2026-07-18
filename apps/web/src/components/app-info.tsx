import { AppData } from "@/constants/appData";

import { SidebarGroupLabel, SidebarMenuItem } from "./ui/sidebar";

const AppInfo = () => {
  return (
    <div className="flex gap-2">
      <ul>
        <SidebarMenuItem dir="rtl">
          <a className="size-8 min-w-8 block" href={AppData.logoLink} target="_blank">
            <img
              src={AppData.logo}
              alt={AppData.title}
              className="size-8! p-1 max-w-full text-foreground/90 object-contain bg-secondary rounded-lg"
            />
          </a>
        </SidebarMenuItem>
      </ul>
      <SidebarGroupLabel className="flex flex-col items-start">
        <h5 className="text-sm font-semibold">{AppData.title}</h5>
        <small className="text-xs font-light">{AppData.shortDescription}</small>
      </SidebarGroupLabel>
    </div>
  );
};

export default AppInfo;
