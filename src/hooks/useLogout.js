import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutService } from "../services/authService";

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logoutUser, isLoading } = useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
    },
  });

  return { logoutUser, isLoading };
}
