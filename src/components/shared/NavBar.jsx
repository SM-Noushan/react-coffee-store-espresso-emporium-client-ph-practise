import { Link } from "react-router-dom";
import logo from "/assets/images/more/logo1.png";
const NavBar = () => {
  return (
    <nav className="py-6 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rancho bg-[url('/assets/images/more/15.jpg')] bg-center bg-cover bg-no-repeat">
      <Link to="/" className="flex justify-center items-center gap-4">
        <img src={logo} alt="website-logo" className="w-16 md:w-20" />
        <p>Espresso Emporium</p>
      </Link>
    </nav>
  );
};

export default NavBar;
