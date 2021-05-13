import { Navbar } from "../ui/components/Navbar";
import { FlexContainer } from "../ui/components/FlexContainer";
import { Footer } from "../ui/components/Footer";
import { Achievement } from "../ui/utils/Paragraphs";
import { Strong } from "../ui/utils/Strong";
import { Bounce, Fade, Roll } from "react-reveal";
import onshapeRobots from "../assets/onshape_robots.png";
import blank from "../assets/white_background.png";

export const AchievementsPage = () => {
  return (
    <div className="content">
      <Navbar />
      <Bounce>
        <h1 style={{ fontSize: "40px" }}>Our Achievements</h1>
      </Bounce>

      <div className="main">
        <Strong>
          <Roll>
            <h1>Onshape Robots</h1>
          </Roll>
        </Strong>
        <Fade>
          <FlexContainer
            child1={<img src={onshapeRobots} width="500" />}
            child2={<Achievement />}
          />
          <div style={{ position: "relative", top: "70px" }}>
            <Strong>
              <Roll>
                <h1>Achievement 2</h1>
              </Roll>
            </Strong>
            <FlexContainer
              child1={<img src={blank} width="500" height="400" />}
              child2={
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              }
            />
          </div>
        </Fade>
      </div>

      <Footer style={{ position: "relative", top: "160px" }} />
    </div>
  );
};
