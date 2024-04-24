import PropTypes from "prop-types";
import HomeButton from "../../components/shared/HomeButton";
import { useLoaderData } from "react-router-dom";

const details = (name, desc) => (
  <p>
    {name}:<span className="text-dark-b5b font-normal"> {desc}</span>
  </p>
);

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const {
    name,
    chef,
    category,
    taste,
    supplier,
    details: dts,
    photo: image,
  } = coffee || {};
  return (
    <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto mt-8 mb-16">
      <HomeButton />
      <div className="bg-white-3f0 rounded-md py-[70px] px-10 md:px-16 lg:px-[112px] mt-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-24">
        <div>
          <img
            className="max-w-[320px] max-h-[380px] rounded-md"
            src={image || "/assets/images/5.png"}
            alt="coffee-img"
          />
        </div>
        <div>
          <h1 className="font-rancho text-4xl text-coffee-a15 mb-7">
            Niceties
          </h1>
          <div className="*:text-coffee-a1a lg:*:text-lg xl:*:text-xl *:font-semibold space-y-2.5">
            {details("Name", name || "Unknown")}
            {details("Chef", chef || "Unknown")}
            {details("Supplier", supplier || "Unknown")}
            {details("Taste", taste || "Unknown")}
            {details("Category", category || "Unknown")}
            {details("Details", dts || "Unknown")}
          </div>
        </div>
      </div>
    </section>
  );
};

details.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CoffeeDetails;
