import type { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Spinner } from "./ui/spinner";

const SubmitButton = ({
  isPending,
  title,
  children,
  className,
  ...props
}: ComponentProps<typeof Button> &
  PropsWithChildren & {
    isPending: boolean;
    title: string;
  }) => {
  return (
    <Field className={cn(className)}>
      <Button disabled={isPending} type="submit" {...props}>
        {title} {isPending && <Spinner />}
      </Button>
      {children}
    </Field>
  );
};

export default SubmitButton;
