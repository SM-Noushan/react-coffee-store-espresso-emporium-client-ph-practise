import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import FooTer from "../components/shared/FooTer";
import Contact from "../components/shared/Contact";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100dvh-196.58px)] font-raleway max-w-md sm:container xl:max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <div className="bg-[url('/assets/images/more/10.png')] bg-cover bg-no-repeat font-raleway">
        <Contact />
      </div>
      <FooTer />
    </div>
  );
};

export default Root;
