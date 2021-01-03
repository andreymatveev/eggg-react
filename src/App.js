import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {AuthGuardRoute} from "./guards/AuthGuardRoute";
import {Header} from "./components/Header/Header";
import {NewsPage} from "./components/News/NewsPage";
import {LoginPage} from "./components/Login/LoginPage";
import React from "react";
import {AuthProvider} from "./context/context";

class App extends React.Component {
  render() {
    const {storeAuth} = this.props
    return <BrowserRouter>
      <AuthProvider>
        <Header storeAuth={storeAuth}/>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/news"/>}/>
          <AuthGuardRoute exact path="/news" component={NewsPage} storeAuth={storeAuth}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route path="*" component={() => '404'}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  }
}

export default App
