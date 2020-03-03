import React from "react";
import { Map as map } from "immutable";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Route, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import reducer from "../../reducers/index";
import Videos from "./Videos.jsx";
import Header from "../components/header";
import NotFound from "../components/NotFound";

const logger_ = ({ getState, dispatch }) => next => action => {
  console.log("Esté es mi estado anterior", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("Esté es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, logger_, thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Videos} /> */}
        <Route exact path="/videos" component={Videos} />
        <Redirect from="/v" to="/videos" />
        <Route exact path="/contacto" component={NotFound} />
        <Route exact path="/" component={NotFound}></Route>
      </Switch>
    </Provider>
  );
};

export default App;
