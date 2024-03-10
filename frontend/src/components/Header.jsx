import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="col-span-full row-span-2 border-b-2">
      <nav className="w-full h-full pl-12 flex items-center gap-6">
        <NavLink className="navlink" to="/">
          Shop
        </NavLink>
        <span className="font-bold text-2xl">|</span>
        <NavLink className="navlink" to="/orders">
          Shoping Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
