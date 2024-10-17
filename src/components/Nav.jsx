import NavLinkItem from "./NavLinkItem";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-8 p-2">
        <NavLinkItem label="Products" to="/" />
        <NavLinkItem label="About Us" to="/about" />
      </ul>
    </nav>
  );
}

export default Nav;
