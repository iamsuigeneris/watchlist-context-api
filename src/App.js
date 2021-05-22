import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Add} from "./components/Add"
import {Watched} from "./components/Watched"
import {Watchlist} from "./components/Watchlist"
import {Header} from "./components/Header"
import "./lib/font-awesome/css/all.min.css"

import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
