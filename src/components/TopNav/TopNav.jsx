import { MdOutlineShoppingBag } from "react-icons/md";
import Lululemon from "../../assets/Lululemon-logo.png";

const TopNav = () => {
  return (
    <header className="flex justify-between border py-4 px-8 max-w-full">
      <nav className="w-[200px]"><img src={Lululemon} alt="" /></nav>
      <MdOutlineShoppingBag className="w-8 h-8" />
    </header>
  );
};

export default TopNav;
