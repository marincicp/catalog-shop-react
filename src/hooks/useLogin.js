import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";

export function useLogin() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    mutate: login,
  } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      setUser({ token: data.token, ...data.user });
      toast.success("Welcome back! You are successfully logged in.");
      setTimeout(() => {
        navigate("/");
      }, 0);
    },
    onError: (err) => toast.error(err.message),
  });

  return { data, isLoading, login };
}
