import React from "react";
import { Provider } from "react-redux";
import Videos from "./pages/containers/Videos.jsx";
import Home from "./pages/components/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./pages/components/header";
import Contacto from "./pages/components/Contacto";
import NotFound from "./pages/components/NotFound";

const App = props => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Videos} /> */}
          <Route exact path="/videos" component={Videos} />
          <Redirect from="/v" to="/videos" />
          <Route exact path="/contacto" component={NotFound} />
          <Route exact path="/" component={NotFound}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
