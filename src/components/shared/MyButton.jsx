import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyButton = ({ icon = "", label, className, url = "" }) => {
  return (
    <Link to={url} className={className}>
      <button className="px-6 py-2 text-white flex justify-center items-center gap-2 bg-orange-577 border-2 border-coffee-a15 rounded-md text-xl font-rancho hover:bg-white-4f1 hover:text-coffee-a1a">
        {label} {icon}
      </button>
    </Link>
  );
};

MyButton.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  url: PropTypes.string,
};

export default MyButton;
