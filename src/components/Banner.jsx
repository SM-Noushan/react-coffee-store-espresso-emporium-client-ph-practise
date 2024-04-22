import icon1 from "/assets/images/icons/1.png";
import icon2 from "/assets/images/icons/2.png";
import icon3 from "/assets/images/icons/3.png";
import icon4 from "/assets/images/icons/4.png";

const info = [
  {
    icon: icon1,
    title: "Awesome Aroma",
    details:
      "You will definitely be a fan of the design & aroma of your coffee",
  },
  {
    icon: icon2,
    title: "High Quality",
    details: "We served the coffee to you maintaining the best quality",
  },
  {
    icon: icon3,
    title: "Pure Grades",
    details: "The coffee is made of the green coffee beans which you will love",
  },
  {
    icon: icon4,
    title: "Proper Roasting",
    details: "Your coffee is brewed by first roasting the green coffee beans",
  },
];

const Banner = () => {
  return (
    <section className="bg-chocolate-ae3">
      <div className="bg-[url('/assets/images/more/3.png')] bg-center bg-cover bg-no-repeat py-16 md:py-[100px] lg:py-[150px] xl:py-[288px]">
        <div className="max-w-[580px] xl:max-w-[724px] text-center md:text-left md:ml-[350px] lg:ml-[450px] xl:ml-[700px] text-white space-y-4">
          <h1 className="font-rancho text-3xl lg:text-[45px] xl:text-[55px]">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="lg:leading-6 xl:leading-7 text-sm lg:text-base">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-sm lg:btn-md rounded-none bg-orange-577 hover:bg-transparent md:text-lg lg:text-xl xl:text-2xl text-dark-222 hover:text-white font-rancho">
            Learn More
          </button>
        </div>
      </div>
      <div className="max-w-md sm:container xl:max-w-screen-xl mx-auto text-center md:text-left grid grid-cols-2 gap-8 md:gap-4 xl:gap-12 md:grid-cols-4 py-[55px]">
        {info.map(({ icon, title, details }, key) => (
          <div key={key} className="text-coffee-a15">
            <img src={icon} alt="" className="mx-auto md:mx-0" />
            <h1 className="mt-4 mb-2 text-2xl lg:text-3xl xl:text-4xl font-rancho">
              {title}
            </h1>
            <p className="text-sm lg:text-base">{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
