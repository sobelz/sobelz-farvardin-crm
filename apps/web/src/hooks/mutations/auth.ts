import { useMutation } from "@tanstack/react-query";
import { login, logout } from "@/api/autn/mutation";
import type { LoginPayload } from "@/api/autn/type";
export const useLoginMutate = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
  });
};
export const useLogoutMutate = () => {
  return useMutation({
    mutationFn: () => logout(),
  });
};
