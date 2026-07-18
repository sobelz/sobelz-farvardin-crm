import { authClient } from "@/lib/auth";
import type { LoginPayload } from "./type";

export const login = ({ email, password, turnstileToken }: LoginPayload) =>
  authClient.signIn.email(
    { email, password },
    { headers: { "x-captcha-response": turnstileToken } },
  );

export const logout = () => authClient.signOut();
