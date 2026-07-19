import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

const Section = ({ className, ...props }: ComponentProps<"section">) => {
  return <section className={cn("container max-w-6xl mx-auto typeset", className)} {...props} />;
};

export default Section;
