import { MdOutlineShoppingBag } from "react-icons/md";
import Lululemon from "../../assets/Lululemon-logo.png";

const TopNav = () => {
  return (
    <header className="flex justify-between border-b-2 border-b-zinc-300 py-4 px-8 max-w-full">
      <nav className="w-[150px]"><img src={Lululemon} alt="lululemon-logo" /></nav>
      <MdOutlineShoppingBag className="w-6 h-6" />
    </header>
  );
};

export default TopNav;
