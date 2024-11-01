import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuthContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.email) navigate("/");
  }, [user, navigate]);

  if (user?.email) return children;
}

export default ProtectedRoute;
