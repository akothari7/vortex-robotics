import "../ui/css/HomePage.css";
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";
import { FlexContainer } from "../ui/components/FlexContainer";
import { HomePageParagraph } from "../utils/Paragraphs";
import logo from "../assets/logo.png";
import downArrow from "../assets/down_arrow.png";
import skystone from "../assets/skystone.png";
import rover_ruckus from "../assets/rover_ruckus.png";
import { Zoom, Roll, Bounce, Fade } from "react-reveal";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div>
          <div className="container">
            <Zoom>
              <img
                loading="lazy"
                src={logo}
                className="img"
                alt="Vortex Robotics"
              />
            </Zoom>
          </div>
          <Roll>
            <h1 className="title">Vortex Robotics</h1>
          </Roll>
          <Bounce>
            <h2 className="ftc">FTC 14969</h2>
          </Bounce>
          <a href="#who_are_we">
            <img
              src={downArrow}
              width="80"
              className="downarrow"
              alt="Down Arrow"
            />
          </a>
        </div>
        <hr className="hr" />
        <div className="main">
          <Fade>
            <h1 id="who_are_we">Who Are We?</h1>
            <HomePageParagraph />
          </Fade>
          <p className="more_info">
            For more information on FIRST and FTC, visit{" "}
            <a
              target="_blank"
              href="https://www.firstinspires.org/robotics/ftc"
            >
              the official FIRST
            </a>{" "}
            website.{" "}
          </p>

          <div className="challenge_container">
            <div>
              <Roll>
                <h2 className="challenge_text">FY19-20 Challenge</h2>
              </Roll>
              <Fade>
                <FlexContainer
                  child1={<img src={skystone} alt="Skystone" width="500" />}
                  child2={
                    <iframe
                      className="frame"
                      width="710"
                      height="428"
                      src="https://www.youtube.com/embed/XiGB_8Ppnbs"
                    ></iframe>
                  }
                />
              </Fade>
            </div>
          </div>

          <div className="challenge_2">
            <Roll>
              <h2 className="challenge_text">FY18-19 Challenge</h2>
            </Roll>
            <Fade>
              <FlexContainer
                child1={
                  <img src={rover_ruckus} alt="Rover Ruckus" width="500" />
                }
                child2={
                  <iframe
                    className="frame"
                    width="710"
                    height="428"
                    src="https://www.youtube.com/embed/rR4gR4l2XA8"
                  ></iframe>
                }
              />
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
