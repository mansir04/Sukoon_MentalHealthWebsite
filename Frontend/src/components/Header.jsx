import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../images/mainlogo.png";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
