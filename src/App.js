import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {AppRoute} from "./routes/AppRoute";
import {Header} from "./components/Header/Header";
import React from "react";
import {AuthProvider} from "./context/context";
import routes from "./routes/routes";

import './assets/scss/main.scss';

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              exact
              key={route.path}
              path={route.path}
              isPrivate={route.isPrivate}
              component={route.component}
            />
          ))}
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  }
}

export default App
