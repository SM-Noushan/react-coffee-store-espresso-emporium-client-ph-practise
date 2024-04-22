import Banner from "../../components/Banner";
import FollowUS from "../../components/FollowUS";

const Home = () => {
  return (
    <>
      <Banner />
      <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto">
        <FollowUS />
      </section>
    </>
  );
};

export default Home;
