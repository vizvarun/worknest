import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

interface AuthRouteProps {
  children: React.ReactNode;
}

// Protects auth routes (login/register) from authenticated users
const AuthRoute = ({ children }: AuthRouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    // Redirect to dashboard if user is already authenticated
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthRoute; 