import { useLocation } from "react-router";

export const usePathAsArray = (): string[] => {
  const { pathname } = useLocation();
  return pathname.split("/").filter((item) => item.trim());
};
