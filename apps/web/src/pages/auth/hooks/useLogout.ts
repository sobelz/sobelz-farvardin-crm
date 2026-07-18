import { useLogoutMutate } from "@/hooks/mutations/auth";

export const useLogout = () => {
  const { mutate: logoutMutate, isPending } = useLogoutMutate();

  const logoutHandler = () => {
    logoutMutate();
  };

  return { isPending, logoutHandler };
};
