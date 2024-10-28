import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) navigate("/");
  }, [user, navigate]);

  if (user?.email) return children;
}

export default ProtectedRoute;
