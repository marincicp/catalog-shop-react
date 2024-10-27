import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerService } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Account successfully created!");
      navigate("/");
    },
    onError: (err) => {
      return toast.error(err.message);
    },
  });

  return { register, isLoading };
}
