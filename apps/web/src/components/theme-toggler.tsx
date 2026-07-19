import { cn } from "@/lib/utils";

import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Kbd, KbdGroup } from "./ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { RiSunCloudyFill } from "@remixicon/react";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipContent>
        <KbdGroup dir="ltr">
          <Kbd>CTRL</Kbd>
          <span>+</span>
          <Kbd>D</Kbd>
        </KbdGroup>
      </TooltipContent>
      <TooltipTrigger
        render={
          <Button
            size="icon"
            className={cn("size-7")}
            data-sidebar="trigger"
            variant="ghost"
            data-slot="sidebar-trigger"
            onClick={toggleTheme}
          />
        }
      >
        <RiSunCloudyFill />
        <span className="sr-only">Toggle Sidebar</span>
      </TooltipTrigger>
    </Tooltip>
  );
};

export default ThemeToggler;
