import { Link } from "react-router";

import type { Icon } from "@/types/menu";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";

import { Label } from "./ui/label";
import { RiAddLine, RiEmojiStickerLine } from "@remixicon/react";

interface EmptyPlaceholderProps {
  icon?: Icon;
  title: string;
  description?: string;
  className?: string;
  actionIcon?: Icon;
  actionTitle?: string;
  onClick?: () => void;
  htmlFor?: string;
  link?: string;
}
type ActionProp =
  | {
      type: "button";
      onClick: () => void;
    }
  | {
      type: "label";
      htmlFor: string;
    }
  | {
      type: "link";
      link: `${string}/`;
    }
  | { type: "none" };

const EmptyPlaceholder = ({
  description,
  icon: IconComponent = RiEmojiStickerLine,
  title,
  actionIcon: ActionIcon = RiAddLine,
  actionTitle,
  className,
  type,
  htmlFor,
  link,
  onClick,
}: ActionProp & EmptyPlaceholderProps) => {
  return (
    <Empty className={cn("border border-dashed", className)}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconComponent />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      <EmptyContent>
        {type === "button" ? (
          <Button size="sm" variant="outline" onClick={onClick}>
            {actionTitle}
            <ActionIcon />
          </Button>
        ) : type === "link" ? (
          <Button size="sm" variant="outline">
            <Link to={link}>
              {actionTitle}
              <ActionIcon />
            </Link>
          </Button>
        ) : type === "label" ? (
          <Button size="sm" variant="outline">
            <Label htmlFor={htmlFor}>
              {actionTitle}
              <ActionIcon />
            </Label>
          </Button>
        ) : (
          <div>{actionTitle}</div>
        )}
      </EmptyContent>
    </Empty>
  );
};

export default EmptyPlaceholder;
