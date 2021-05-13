import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Landing from "./Landing";
import "../styleshets/App.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Main" component={Main} />
    </Switch>
  );
}

export default App;
