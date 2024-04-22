import PropTypes from "prop-types";

const SectionHeadings = ({ subHeading, heading }) => {
  return (
    <>
      <h3 className="text-sm md:text-base lg:text-lg xl:text-xl text-coffee-a1a">
        {subHeading}
      </h3>
      <h1 className="font-rancho text-2xl md:text-4xl lg:text-5xl xl:text-[55px] text-coffee-a15">
        {heading}
      </h1>
    </>
  );
};

SectionHeadings.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionHeadings;
