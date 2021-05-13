import "../ui/css/SponsorPage.css";
import { FlexContainer } from "../ui/components/FlexContainer";
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";
import digitalOcean from "../assets/digitalocean.png";
import apple from "../assets/apple.png";
import github from "../assets/github.png";

export const SponsorPage = () => {
  return (
    <div className="content">
      <Navbar />
      <h1>Sponsors & Partnerships</h1>
      <p>
        We are proud to be sponsored by DigitalOcean, Apple, and GitHub, and
        have received smaller donations as well.
      </p>
      <div className="cards">
        <FlexContainer
          child1={<img src={digitalOcean} width="300" alt="DigitalOcean" />}
          child2={
            <h3>
              We have been sponsored by DigitalOcean for 2 months now. We can't
              thank them enough for their generosity! Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </h3>
          }
        />
        <FlexContainer
          child1={<img src={apple} width="300" alt="DigitalOcean" />}
          child2={
            <h3>
              We have been sponsored by Apple for 10 months now. We can't thank
              them enough for their generosity! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h3>
          }
        />
        <FlexContainer
          child1={<img src={github} width="300" alt="DigitalOcean" />}
          child2={
            <h3>
              We have been sponsored by GitHub for 6 months now. We can't thank
              them enough for their generosity! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h3>
          }
        />
      </div>

      <Footer style={{ position: "relative", top: "160px" }} />
    </div>
  );
};
