import PropTypes from "prop-types";

const SectionHeadings = ({ subHeading, heading }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl text-coffee-a1a">{subHeading}</h3>
      <h1 className="font-rancho text-[55px] text-coffee-a15">{heading}</h1>
    </div>
  );
};

SectionHeadings.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionHeadings;
