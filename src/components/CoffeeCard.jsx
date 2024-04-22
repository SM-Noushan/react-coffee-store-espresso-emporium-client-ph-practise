import { FaRegEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CoffeeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center p-[30px] bg-white-4f1 rounded-[10px]">
      <div>
        <img className="" src="/assets/images/1.png" alt="popular-coffee-img" />
      </div>
      <div className="*:text-coffee-a1a lg:*:text-lg xl:*:text-xl *:font-semibold flex-1">
        <p>
          Name:
          <span className="text-dark-b5b font-normal"> Americano Coffee</span>
        </p>
        <p>
          Chef:<span className="opacity-70 font-normal"> Mr. Martin Paul</span>
        </p>
        <p>
          Price:<span className="font-normal"> 800 Taka</span>
        </p>
      </div>
      <div className="flex lg:flex-col pt-4 lg:pt-0 lg:pl-4 gap-3 text-white *:rounded-md *:p-2 self-center md:self-end lg:self-center">
        <Link to={`/coffee-details`} className="bg-orange-577 ">
          <FaRegEye />
        </Link>
        <Link className="bg-dark-93b">
          <FaPen />
        </Link>
        <Link className="bg-red-744">
          <FaTrash />
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
