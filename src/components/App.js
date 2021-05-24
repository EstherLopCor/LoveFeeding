import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Landing from "./Landing";
import Register from "./Register";
import Children from "./Children";
import Start from "./Start.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Main" component={Main} />
        <Route path="/Register" component={Register} />
        <Route path="/Children" component={Children} />
        <Route path="/Start" component={Start} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
