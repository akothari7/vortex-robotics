import { Navbar } from "../ui/components/Navbar";
import { FlexContainer } from "../ui/components/FlexContainer";
import { Footer } from "../ui/components/Footer";
import { Achievement, LoremIpsum } from "../ui/utils/Paragraphs";
import onshapeRobots from "../assets/onshape_robots.png";
import blank from "../assets/white_background.png";

export const AchievementsPage = () => {
  return (
    <div className="content">
      <Navbar />
      <h1 style={{ fontSize: "40px" }}>Our Achievements</h1>

      <div className="main">
        <h1>Onshape Robots</h1>
        <FlexContainer
          child1={<img src={onshapeRobots} width="500" />}
          child2={<Achievement />}
        />
        <div style={{ position: "relative", top: "70px" }}>
          <h1>Achievement 2</h1>
          <FlexContainer
            child1={<img src={blank} width="500" height="400" />}
            child2={
              <p style={{ fontSize: "20px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            }
          />
        </div>
      </div>
      <Footer style={{ position: "relative", top: "160px" }} />
    </div>
  );
};
