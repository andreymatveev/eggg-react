import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuthState} from "../context/context";
import {isLoggedIn} from "../context/actions";

export const AppRoute = ({component: Component, ...rest}) => {
  const authState = useAuthState();
  return (

    <Route {...rest} render={
      (props) => {
        if (!rest.isPrivate || (rest.isPrivate && isLoggedIn(authState))) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to="/login"/>
        }
      }
    }
    />
  )
};
