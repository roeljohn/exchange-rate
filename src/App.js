import { Router, BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import RatesConvert from "./pages/RatesConvert";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
            <Switch>
              <Route path="/" render={props => <RatesConvert {...props} />} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
