import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import logo from "/assets/images/more/logo1.png";

const Contact = () => {
  const headingCSS = "font-rancho text-coffee-a15 text-[35px] lg:text-[45px]";
  const inputCSS =
    "py-3.5 px-4 text-coffee-a1a w-[90%] md:w-2/3 placeholder:text-coffee-a1a/60 outline-none focus:ring-1 focus:ring-orange-577 focus:rounded-md bg-white";
  return (
    <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20 xl:gap-28 pb-[48px]">
      <div className="">
        <img src={logo} alt="website-logo" className="w-20 mb-4" />
        <h1 className={headingCSS}>Espresso Emporium</h1>
        <p className="text-lg ld:text-xl text-coffee-a1a max-w-lg xl:max-w-2xl mt-4 mb-8">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-6 items-center text-coffee-a15 *:size-7 lg:*:size-10 *:cursor-pointer mb-6">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <h1 className={headingCSS}>Get in Touch</h1>
        <div className="*:flex *:gap-6 *:items-center *:text-coffee-a15 mt-4">
          <div>
            <FaPhone />
            <p className="text-coffee-a1a lg:text-xl">+88 01533 333 333</p>
          </div>
          <div>
            <FaEnvelope />
            <p className="text-coffee-a1a lg:text-xl">info@gmail.com</p>
          </div>
          <div>
            <FaLocationDot />
            <p className="text-coffee-a1a lg:text-xl">
              72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex-grow w-full max-w-lg mx-auto lg:w-auto ">
        <h1 className={`${headingCSS}`}>Connect with Us</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input type="text" placeholder="Name" className={inputCSS} />
          <br />
          <input type="text" placeholder="Email" className={inputCSS} />
          <br />
          <textarea
            cols="30"
            rows="5"
            placeholder="Message"
            className={inputCSS}
          ></textarea>
          <br />
          <input
            type="submit"
            value="Send Message"
            className="border-2 border-coffee-a15 px-3.5 lg:px-5 py-1 lg:py-2 rounded-full cursor-pointer text-lg lg:text-2xl text-coffee-a15 font-rancho hover:bg-orange-577"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
