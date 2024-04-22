import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import FooTer from "../components/shared/FooTer";
import Contact from "../components/shared/Contact";

const Root = () => {
  return (
    <>
      <NavBar />
      <main className="font-raleway">
        <Outlet />
      </main>
      <footer className="bg-[url('/assets/images/more/10.png')] bg-cover bg-no-repeat font-raleway">
        <Contact />
      </footer>
      <FooTer />
    </>
  );
};

export default Root;
