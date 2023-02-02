import { menuitems } from "../menuitems";
import Menuitems from "./Menuitems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuitems.map((menu, index) => {
          const depthLevel = 0;
          return <Menuitems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
