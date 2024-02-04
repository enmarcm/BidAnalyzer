import { NavLink } from "react-router-dom";

const NavButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return <NavLink to={to} className="block w-full bg-blue-500 p-3 text-center rounded-md hover:opacity-50 font-semibold">{children}</NavLink>;
};

export default NavButton;
