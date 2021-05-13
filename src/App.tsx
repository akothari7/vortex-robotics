import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { OutreachPage } from "./pages/OutreachPage";
import { SponsorPage } from "./pages/SponsorPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ContactUsPage } from "./pages/ContactUsPage";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/outreach">
            <OutreachPage />
          </Route>
          <Route exact path="/sponsors">
            <SponsorPage />
          </Route>
          <Route exact path="/achievements">
            <AchievementsPage />
          </Route>
          <Route exact path="/contact">
            <ContactUsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
