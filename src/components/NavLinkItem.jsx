import { NavLink } from "react-router-dom";

function NavLinkItem({ to, label }) {
  return (
    <li className="px-4 py-2 text-base font-semibold tracking-wider">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition-all duration-300  ${
            isActive
              ? "border-b-4 border-b-green-500  pb-3 text-gray-900"
              : "text-gray-400 border-b-4 border-b-transparent"
          } `
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavLinkItem;
