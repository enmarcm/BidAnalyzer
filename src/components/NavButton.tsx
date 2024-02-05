import { NavLink } from "react-router-dom";
import { ColorsButton } from "../constants/ColorsButton";

const NavButton = ({
  to,
  children,
  color = ColorsButton.blue,
}: {
  to: string;
  children: React.ReactNode;
  color?: ColorsButton;
}) => {
  
  return (
    <NavLink
      to={to}
      className={`block w-full ${color} p-3 text-center rounded-md hover:opacity-50 font-semibold`}
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
