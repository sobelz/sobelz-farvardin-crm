import { authClient } from "@/lib/auth";
import type { LoginPayload } from "./type";

export const login = ({ email, password }: LoginPayload) =>
  authClient.signIn.email({ email, password });

export const logout = () => authClient.signOut();
