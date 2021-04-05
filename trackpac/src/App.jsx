// NPM imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components/Page Imports
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* The header is outside the Switch to make it available all the time */}

        {/* The pages we want to show based on the browser URL */}
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Search} path="/search" />
        </Switch>
      </Router>
    </div>
  );
}
