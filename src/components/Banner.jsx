const Banner = () => {
  return (
    <section>
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
      <div className="*:max-w-md *:sm:container *:xl:max-w-screen-xl *:mx-auto bg-chocolate-ae3">
        banner
      </div>
    </section>
  );
};

export default Banner;
