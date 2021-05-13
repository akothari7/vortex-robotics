import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";
import { Bounce, Fade, Roll } from "react-reveal";
import "../ui/css/ContactUsPage.css";

export const ContactUsPage = () => {
  return (
    <div className="content">
      <Navbar />
      <Bounce>
        <h1>Contact Us</h1>
      </Bounce>

      <Fade>
        <div className="container-c">
          <form>
            <label>First Name</label>
            <input type="text" placeholder="First Name" />

            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />

            <label>Subject</label>
            <textarea rows={15} placeholder="Write something.."></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Fade>

      <Footer style={{ position: "relative", top: "160px" }} />
    </div>
  );
};
