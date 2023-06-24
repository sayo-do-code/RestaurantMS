import "./footer.css";
import { footerImages } from "../helper/data";

const Footer = () => {
  return (
    <div className="container">
      <div>©2023 Sore Zore. All rights reserved.</div>
      <div className="social">
        {footerImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            width={25}
            height={25}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
