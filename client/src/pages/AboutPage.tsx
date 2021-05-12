import "../ui/css/AboutPage.css";
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";
import { GoalsParagraph } from "../ui/utils/Paragraphs";
import { Fade, Bounce } from "react-reveal";

export const AboutPage = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Bounce>
          <h1 className="title">What Are Our Goals?</h1>
        </Bounce>
        <div className="goals_p">
          <Fade>
            <GoalsParagraph />
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
};
