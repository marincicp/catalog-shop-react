import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";
import Button from "./Button";
import NavLinkItem from "./NavLinkItem";

function Nav() {
  const { user } = useUser();
  const { logoutUser, isLoading } = useLogout();

  return (
    <nav>
      <ul className="flex gap-8 p-2">
        <NavLinkItem label="Products" to="/" />
        <NavLinkItem label="About Us" to="/about" />

        {user?.email ? (
          <Button onClick={logoutUser} disabled={isLoading}>
            Logout
          </Button>
        ) : (
          <NavLinkItem label="Login" to="/login" />
        )}
      </ul>
    </nav>
  );
}

export default Nav;
