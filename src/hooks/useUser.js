import { useQuery } from "@tanstack/react-query";
import { getCurrentUserService } from "../services/authService";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserService,
  });

  console.log(user, "cur usser");

  return { user, isLoading };
}
