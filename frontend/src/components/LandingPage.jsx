import "./landingpage.css";
// import Logo from "../../public/Images/logo.svg";
import RestaurantImg from "../Images/restaurant.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="main_container">
      <Navbar />
      <div className="container">
        <div className="item">
          <h1 className="title">Better design for your digital products.</h1>
          <p className="desc">
            Turning yoru Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Link to="/login" className="button">
            Login
          </Link>
        </div>
        <div className="item">
          <img src={RestaurantImg} alt="Hero Image" className="img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
