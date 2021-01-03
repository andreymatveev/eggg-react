import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {AuthGuardRoute} from "./guards/AuthGuardRoute";
import {Header} from "./components/Header/Header";
import {NewsPage} from "./components/News/NewsPage";
import {LoginPage} from "./components/Login/LoginPage";
import React from "react";
import {AuthContextProvider} from "./context/AuthContext";

class App extends React.Component {
  render() {
    const {storeAuth} = this.props
    return <BrowserRouter>
      <AuthContextProvider>
        <Header storeAuth={storeAuth}/>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/news"/>}/>
          <AuthGuardRoute exact path="/news" component={NewsPage} storeAuth={storeAuth}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route path="*" component={() => '404'}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  }
}

export default App
