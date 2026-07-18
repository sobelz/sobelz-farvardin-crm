import { getSession } from "@/api/autn/query";
import { useQuery } from "@tanstack/react-query";

export const useSessionQuery = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};
