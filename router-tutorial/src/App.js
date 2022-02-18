import { Router, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
//BAP acccount: volh@bap.jp
//BAP password: BAP@2020!pXMW6V22
function App() {
  return (
    <Switch>
      <Router path="/" exact>
        <Redirect path="/quotes" />
      </Router>

      <Router path="/quotes" exact>
        <AllQuotes />
      </Router>

      <Router path="/quotes/:quoteId">
        <QuoteDetail />
      </Router>

      <Router path="/new-quote">
        <NewQuote />
      </Router>
    </Switch>
  );
}

export default App;
