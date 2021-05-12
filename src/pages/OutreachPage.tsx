import "../ui/css/OutreachPage.css";
import { Navbar } from "../ui/components/Navbar";
import { LoremIpsum } from "../ui/utils/Paragraphs";
import { Strong } from "../ui/utils/Strong";
import blank from "../assets/white_background.png";
import { Bounce, Fade, Roll } from "react-reveal";

export const OutreachPage = () => {
  return (
    <div>
      <Navbar />
      <div className="outreach-content">
        <div className="header">
          <Bounce>
            <h1 className="title">Outreach</h1>
          </Bounce>

          <Fade>
            <h2 className="outreach_p">
              Introducing <Strong>STEM</Strong> and <Strong>FIRST</Strong> to
              our communities.
            </h2>
          </Fade>
        </div>

        <div className="main-content">
          <Roll>
            <h1>
              <Strong>2020-21</Strong> Season
            </h1>
          </Roll>

          <Fade>
            <div className="event">
              <Bounce>
                <h2 className="date">December 2020</h2>
              </Bounce>

              <LoremIpsum />
              <img src={blank} width="500" />
            </div>
            <div className="event">
              <Bounce>
                <h2 className="date">October 2020</h2>
              </Bounce>
              <LoremIpsum />
            </div>

            <div className="space">
              <Roll>
                <h1>
                  <Strong>2019-20</Strong> Season
                </h1>
              </Roll>

              <div className="event">
                <Bounce>
                  <h2 className="date">January 2020</h2>
                </Bounce>
                <LoremIpsum />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
