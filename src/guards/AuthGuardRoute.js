import {Route, Redirect} from 'react-router-dom';
import {LoginPage} from "../components/Login/LoginPage";

export const AuthGuardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={
      (props) => {
        console.log('-',props);
        if (props.storeAuth && props.storeAuth.isLoggedIn) {
          return <Component {...rest} />
        } else {
          return <Redirect to="/login"/>
        }
      }
    }
    />
  )
};
