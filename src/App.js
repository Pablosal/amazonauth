import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import SecretPage from "./pages/SecretPage";
import PublicPage from "./pages/PublicPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute component={SecretPage} path="/secreto" exact />
          <Route component={PublicPage} path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
