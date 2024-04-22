import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import FooTer from "../components/shared/FooTer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100dvh-196.58px)] font-raleway">
        <Outlet />
      </div>
      <FooTer />
    </div>
  );
};

export default Root;
