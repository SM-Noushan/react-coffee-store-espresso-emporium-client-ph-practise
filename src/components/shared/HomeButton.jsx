import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link
      to="/"
      className="w-fit px-1 py-2.5 rounded-[10px] text-blue-151 text-xl lg:text-3xl font-rancho flex items-center gap-4 hover:bg-orange-577"
    >
      <FaArrowLeft />
      <p>Back to home</p>
    </Link>
  );
};

export default HomeButton;
