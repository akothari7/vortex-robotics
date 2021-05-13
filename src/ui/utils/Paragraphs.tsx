import { CSSProperties } from "react";
import { Strong } from "./Strong";

export const HomePageParagraph = () => {
  return (
    <div>
      <p className="home_p">
        Vortex Robotics is an <Strong>award-winning</Strong> second year FTC
        community team consisting of strong individuals from the Bay Area. FTC,
        or FIRST Tech Challenge is an annual competition where students around
        the globe build robots to complete challenges. As a part of FTC, we work
        to build our STEM and real-life skills, by programming, building our
        robot, outreaching towards our local communities, always documenting our
        findings, and practicing Gracious Professionalism.{" "}
      </p>
    </div>
  );
};

export const GoalsParagraph = () => {
  return (
    <div>
      <p className="home_p">
        We qualified to regionals in the past FY18-19 and FY19-20 seasons, and
        hope to continue our qualifying streak this FY20-21 season, working hard
        to possibly make it to Worlds. We are currently striving to spread STEM
        to as many youth as possible within our Bay Area communities through
        online camps. Additionally, we will be working hard over the summer to
        implement new design ideas and train for the upcoming season.
      </p>
    </div>
  );
};

export const LoremIpsum = () => {
  const styles: CSSProperties = { padding: "1px 20rem", fontSize: "20px" };

  return (
    <div>
      <p style={styles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export const Achievement = () => {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        In the Onshape Robots to the Rescue competition, competing teams were
        required to CAD a robot that would solve a major world issue. Our team
        chose to target the issue of the inefficient and wasteful system of
        delivering medications to patients in hospitals. (Please see the Robot
        Design sub-page under the About Us page to view more details about the
        robot we designed). We partnered with Team Apollo to form an alliance,
        where they would focus on disinfecting our delivery robot. Out of the
        total of 151 teams entered in the competition, our team was ranked #32.
        Considering this was most of the members' first time CADing, this
        ranking is impressive, and we learned a lot from this experience! Our
        team will continue with learning to use CAD to design our robot, and we
        look forward to what we can do with it in the future!
      </p>
    </div>
  );
};
