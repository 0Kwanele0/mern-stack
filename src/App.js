import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Each from "./Components/Each";
import Create from "./Components/Create";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route path="/:id" component={Each} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
