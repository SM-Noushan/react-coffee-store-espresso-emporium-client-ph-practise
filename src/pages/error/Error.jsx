import HomeButton from "../../components/shared/HomeButton";

const Error = () => {
  return (
    <section className="text-center *:mx-auto mt-8">
      <HomeButton />
      <section className="flex justify-center">
        <img src="/assets/images/404/404.gif" alt="error-gif" />
      </section>
    </section>
  );
};

export default Error;
