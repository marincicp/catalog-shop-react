import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    mutate: login,
  } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);

      toast.success("Welcome back! You are successfully logged in.");
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { data, isLoading, login };
}
