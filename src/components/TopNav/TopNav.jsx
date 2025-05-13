import { MdOutlineShoppingBag } from "react-icons/md";
import Lululemon from "../../assets/Lululemon-logo.png";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between border-b-2 border-b-zinc-300 py-3 px-6 max-w-full">
      <nav className="w-[100px]"><img className="cursor-pointer" src={Lululemon} alt="lululemon-logo" onClick={() => navigate('/')} /></nav>
      <MdOutlineShoppingBag className="w-6 h-6" />
    </header>
  );
};

export default TopNav;
