import { Logo, Nav } from ".";

function Header() {
  return (
    <header className="bg-white px-8  flex justify-between items-center border-b-2 border-gray-100">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
