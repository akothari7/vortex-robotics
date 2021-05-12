import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
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
          <Route exact path="/admin" component={() => <div>admin</div>} />

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
