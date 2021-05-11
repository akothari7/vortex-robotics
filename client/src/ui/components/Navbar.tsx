import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Apply</a>
        <a href="/">Outreach</a>
        <a href="/">Donors</a>
        <a href="/">Achievements</a>
        <a href="/">Contact Us</a>
        <a href="/" id="github">
          Login with GitHub
        </a>
      </div>
    </div>
  );
};
