import React from 'react';
import {useAuthDispatch, useAuthState} from "../../context/context";
import {isLoggedIn, logout} from "../../context/actions";

export function Header(props) {

  let logoutButton = '';
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  if (isLoggedIn(authState)) {
    logoutButton = <button onClick={onLogoutClick.bind(this)}>Log Out</button>;
  }

  return (
    <div className="header">
      <a href="/" className="logo">PZ</a>
      {logoutButton}
    </div>
  );

  function onLogoutClick() {
    return logout(dispatch);
  }
}
