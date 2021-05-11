import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/">Apply</a>
        <a href="/">Outreach</a>
        <a href="/">Donors</a>
        <a href="/">Achievements</a>
        <a href="/">Contact Us</a>
        <a href="http://localhost:4000/api/auth/github" id="github">
          Login with GitHub
        </a>
      </div>
    </div>
  );
};
