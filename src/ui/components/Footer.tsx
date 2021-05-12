import "../css/Footer.css";
import { Bounce } from "react-reveal";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  FaFacebook,
} from "react-icons/all";

export const Footer = () => {
  return (
    <footer>
      <Bounce>
        <p className="footer_p">
          Copyright &copy; Vortex Robotics 2021 |{" "}
          <AiOutlineInstagram
            className="icons"
            id="instagram"
            onClick={() => window.open("https://instagram.com", "_blank")}
          />
          <AiFillTwitterCircle
            className="icons"
            id="twitter"
            onClick={() => window.open("https://twitter.com", "_blank")}
          />
          <FaFacebook
            className="icons"
            id="facebook"
            onClick={() => window.open("https://facebook.com", "_blank")}
          />
        </p>
      </Bounce>
    </footer>
  );
};
