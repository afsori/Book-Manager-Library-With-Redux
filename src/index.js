import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css';";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap-carousel";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import App from "./App";
import Detail from "./Component/Detail/Detail";
import { Provider } from "react-redux";
import store from "./Public/Redux/store";
const EnhancedApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/Detail/:id" component={Detail} />
      </Router>
    </Provider>
  );
};

ReactDOM.render(
  <EnhancedApp />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
