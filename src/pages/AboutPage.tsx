import "../ui/css/AboutPage.css";
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";
import { GoalsParagraph } from "../ui/utils/Paragraphs";
import { Fade, Bounce } from "react-reveal";

import { TeamCard } from "../ui/components/TeamCard";
import white from "../assets/white_background.png";

export const AboutPage = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="about_content">
        <Bounce>
          <h1 className="title">What Are Our Goals?</h1>
        </Bounce>
        <div className="goals_p">
          <Fade>
            <GoalsParagraph />
          </Fade>
          <h1 className="tm">Team Members</h1>
          <TeamCard
            image={<img src={white} width="480" />}
            name="First Last"
            role="Software Engineer"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TeamCard
            image={<img src={white} width="480" />}
            name="First Last"
            role="Software Engineer"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TeamCard
            image={<img src={white} width="480" />}
            name="First Last"
            role="Software Engineer"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TeamCard
            image={<img src={white} width="480" />}
            name="First Last"
            role="Software Engineer"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
