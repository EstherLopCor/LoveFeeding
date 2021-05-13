import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Landing from "./Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
