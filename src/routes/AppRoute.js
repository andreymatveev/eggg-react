import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthState} from "../context/context";
import {isLoggedIn} from "../context/actions";

export const AppRoute = ({component: Component, ...rest}) => {
  const authState = useAuthState();
  console.log(rest.isPrivate, isLoggedIn(authState));
  return (

    <Route {...rest} render={
      () => {
        if (!rest.isPrivate || (rest.isPrivate && isLoggedIn(authState))) {
          return <Component {...rest} />
        } else {
          return <Redirect to="/login"/>
        }
      }
    }
    />
  )
};
