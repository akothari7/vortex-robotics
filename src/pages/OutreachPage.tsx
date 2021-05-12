import "../ui/css/OutreachPage.css";
import { Navbar } from "../ui/components/Navbar";
import { LoremIpsum } from "../ui/utils/Paragraphs";
import { Strong } from "../ui/utils/Strong";
import blank from "../assets/white_background.png";

export const OutreachPage = () => {
  return (
    <div>
      <Navbar />
      <div className="outreach-content">
        <div className="header">
          <h1 className="title">Outreach</h1>
          <h2 className="outreach_p">
            Introducing <Strong>STEM</Strong> and <Strong>FIRST</Strong> to our
            communities.
          </h2>
        </div>

        <div className="main-content">
          <h1>
            <Strong>2020-21</Strong> Season
          </h1>

          <div className="event">
            <h2 className="date">December 2020</h2>
            <LoremIpsum />
            <img src={blank} width="500" />
          </div>
          <div className="event">
            <h2 className="date">October 2020</h2>
            <LoremIpsum />
          </div>

          <div className="space">
            <h1>
              <Strong>2019-20</Strong> Season
            </h1>

            <div className="event">
              <h2 className="date">January 2020</h2>
              <LoremIpsum />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
