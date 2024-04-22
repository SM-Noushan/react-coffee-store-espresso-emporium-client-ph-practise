import PropTypes from "prop-types";

const MyButton = ({ icon = "", label, type = "" }) => {
  return (
    <button
      className="px-6 py-2 text-white flex justify-center items-center gap-2 bg-orange-577 border-2 border-coffee-a15 rounded-md text-xl font-rancho hover:bg-white-4f1 hover:text-coffee-a1a"
      type={type}
    >
      {label} {icon}
    </button>
  );
};

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
};

export default MyButton;
