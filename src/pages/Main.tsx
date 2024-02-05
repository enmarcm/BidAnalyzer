import NavButton from "../components/NavButton";
import { NavObject } from "../constants/NavObject";

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-5 text-white h-full items-center justify-center box-border">
        <h1 className="text-3xl font-bold my-4">Crypto Manager</h1>

        {NavObject.map((navItem) => {
          return (
            <NavButton to={navItem.to} color={navItem?.color} key={navItem.to}>
              {navItem.content}
            </NavButton>
          );
        })}
      </div>
    </>
  );
};

export default Main;
