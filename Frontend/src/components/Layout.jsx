import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <div className="footer-at-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
