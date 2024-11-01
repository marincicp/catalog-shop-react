import { useMutation } from "@tanstack/react-query";
import { logoutService } from "../services/authService";
import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const { removeUser } = useAuthContext();

  const { mutate: logoutUser, isLoading } = useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      removeUser();
    },
  });

  return { logoutUser, isLoading };
}
