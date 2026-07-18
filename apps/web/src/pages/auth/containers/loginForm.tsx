import { Turnstile } from "@marsidev/react-turnstile";
import { Controller } from "react-hook-form";
import { Link } from "react-router";

import SubmitButton from "@/components/submit-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";
import ENV from "@/config/env";
import { cn } from "@/lib/utils";
import { useLogin } from "../hooks/useLogin";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const { control, onSubmit, isPending } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>ورود به پنل مدیریت</CardTitle>
          <CardDescription>ورود با استفاده از ایمیل و رمز عبور</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                    <Input
                      dir="ltr"
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center gap-2">
                      <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
                      <Link
                        className="me-auto font-light inline-block text-sm underline-offset-4 hover:underline"
                        to="/auth/forgot-password"
                      >
                        رمز عبور خود را فراموش کرده اید؟
                      </Link>
                    </div>
                    <PasswordInput
                      dir="ltr"
                      required
                      id="password"
                      autoComplete="current-password"
                      {...field}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="turnstileToken"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Turnstile
                      className="w-fit mx-auto"
                      siteKey={ENV().VITE_CAPTCHA_SITE_KEY}
                      onSuccess={field.onChange}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </>
                )}
              />
              <SubmitButton isPending={isPending} title="ورود">
                <FieldDescription className="text-center">
                  حساب کاربری ندارید؟ <Link to="/auth/register">ثبت نام کنید</Link>
                </FieldDescription>
              </SubmitButton>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
