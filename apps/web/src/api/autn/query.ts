import { authClient } from "@/lib/auth";

export const getSession = () => {
  return authClient.getSession();
};
