import React from "react";
import Events from "./components/events/Events";
import { GlobalStyles, Main } from "./App.styles";
import { Switch, Route } from "react-router-dom";
import Team from "./components/team/Team";
import Header from "./components/header/Header";
import Wrapper from "./common/components/wrapper/Wrapper";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Main className="App">
        <Header />
        <Wrapper>
          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/">
              <Events />
            </Route>
          </Switch>
        </Wrapper>
      </Main>
    </React.Fragment>
  );
};

export default App;
