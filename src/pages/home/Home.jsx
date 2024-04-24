import Banner from "../../components/Banner";
import FollowUS from "../../components/FollowUS";
import PopularProducts from "../../components/PopularProducts";
import { useQuery } from "@tanstack/react-query";
import client from "../../utils/axios";
import { createContext } from "react";

export const RefetchContext = createContext(null);

const Home = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["homePopularProducts"],
    queryFn: () => client("get", "/coffee").then((res) => res.data),
  });
  return (
    <>
      <Banner />
      <section className="relative">
        {!isLoading && (
          <RefetchContext.Provider value={refetch}>
            <PopularProducts coffees={data} />
          </RefetchContext.Provider>
        )}
      </section>
      <section className="max-w-md sm:container xl:max-w-screen-xl mx-auto">
        <FollowUS />
      </section>
    </>
  );
};

export default Home;
