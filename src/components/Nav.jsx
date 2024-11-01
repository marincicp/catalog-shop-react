import { useLogout } from "../hooks/useLogout";
import Button from "./Button";
import NavLinkItem from "./NavLinkItem";
import { useAuthContext } from "../hooks/useAuthContext";

function Nav() {
  const { user } = useAuthContext();

  const { logoutUser, isLoading } = useLogout();

  return (
    <nav>
      <ul className="flex gap-8 p-2">
        <NavLinkItem label="Products" to="/" />
        <NavLinkItem label="About Us" to="/about" />

        {user?.email ? (
          <Button onClick={logoutUser} disabled={isLoading}>
            {isLoading ? "Loading..." : "Logout"}
          </Button>
        ) : (
          <NavLinkItem label="Login" to="/login" />
        )}
      </ul>
    </nav>
  );
}

export default Nav;
