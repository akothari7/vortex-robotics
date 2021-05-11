import "../css/Body.css";
import logo from "../../assets/logo.png";
import { homepageParagraph } from "../../utils/Paragraphs";

export const Body = () => {
  return (
    <div className="content">
      <div>
        <div className="container">
          <img
            loading="lazy"
            src={logo}
            className="img"
            alt="Vortex Robotics"
          ></img>
        </div>
        <h1 className="title">Vortex Robotics</h1>
        <h2 className="ftc">FTC 14969</h2>
        <a href="#who_are_we">down</a>
      </div>
      <div>
        <h2 id="who_are_we">Who Are We?</h2>
        <p>{homepageParagraph}</p>
        <p>
          For more information on FIRST and FTC, visit the official FIRST
          website.{" "}
        </p>
        <div>
          <h2>FY19-20 Challenge</h2>

          <h2>FY18-19 Challenge</h2>
        </div>
      </div>
    </div>
  );
};
