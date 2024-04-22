import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import logo from "/assets/images/more/logo1.png";

const Contact = () => {
  const headingCSS = "font-rancho text-coffee-a15 text-[45px]";
  const contactInfoCSS = "flex gap-6 items-center text-coffee-a15";
  return (
    <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto flex items-center pt-[120px] pb-[48px]">
      <div>
        <img src={logo} alt="website-logo" className="w-20 mb-4" />
        <h1 className={headingCSS}>Espresso Emporium</h1>
        <p className="text-xl text-coffee-a1a max-w-2xl mt-4 mb-8">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-6 items-center text-coffee-a15 *:size-10 *:cursor-pointer mb-6">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <h1 className={headingCSS}>Get in Touch</h1>
        <div className="*:flex *:gap-6 *:items-center *:text-coffee-a15 mt-4">
          <div>
            <FaPhone />
            <p className="text-coffee-a1a text-xl">+88 01533 333 333</p>
          </div>
          <div>
            <FaEnvelope />
            <p className="text-coffee-a1a text-xl">info@gmail.com</p>
          </div>
          <div>
            <FaLocationDot />
            <p className="text-coffee-a1a text-xl">
              72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;
