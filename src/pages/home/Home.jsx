import Banner from "../../components/Banner";
import FollowUS from "../../components/FollowUS";
import PopularProducts from "../../components/PopularProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto">
        <PopularProducts />
        <FollowUS />
      </section>
    </>
  );
};

export default Home;
