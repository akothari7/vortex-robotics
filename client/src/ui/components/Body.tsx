import "../css/Body.css";
import logo from "../../assets/logo.png";
import { homepageParagraph } from "../../utils/Paragraphs";

export const Body = () => {
  return (
    <div className="content">
      <div>
        <img src={logo}></img>
        <h1>Vortex Robotics</h1>
        <h2>FTC 14969</h2>
      </div>
      <div>
        <h2>Who Are We?</h2>
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
