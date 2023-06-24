import { Link } from "react-router-dom";
import { Links } from "../helper/data";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <Link to="/" className="logo">
        Sore Zore
      </Link>
      <div className="links">
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className="link">
            {link.title}
          </Link>
        ))}
        <Link className="login" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
