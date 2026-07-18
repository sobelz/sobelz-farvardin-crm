import { useSessionQuery } from "@/hooks/queries/auth";
import { Navigate, Outlet } from "react-router";
export const ProtectedRoute = () => {
  const { data: session, isPending } = useSessionQuery();
  if (isPending) return null;

  if (!session || session.data?.user === null) {
    return <Navigate replace to="/auth/login" />;
  }

  return <Outlet />;
};

export const RedirectIfIsLoggedIn = () => {
  const { data: session, isPending } = useSessionQuery();

  if (isPending) return null;
  if (session && session.data?.user) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
};
