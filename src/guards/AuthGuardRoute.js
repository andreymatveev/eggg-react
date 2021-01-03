import {Route, Redirect} from 'react-router-dom';
import {useAuthState} from "../context/context";
import {isLoggedIn} from "../context/actions";

export const AuthGuardRoute = ({component: Component, ...rest}) => {
  const authState = useAuthState();
  return (
    <Route {...rest} render={
      (props) => {
        if (isLoggedIn(authState)) {
          return <Component {...rest} />
        } else {
          return <Redirect to="/login"/>
        }
      }
    }
    />
  )
};
