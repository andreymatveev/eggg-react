import React from 'react';
import {useAuthDispatch, useAuthState} from "../../context/context";
import {isLoggedIn, logout} from "../../context/actions";
import cn from "classnames";

import styles from './Header.module.scss';

export function Header(props) {

  let logoutButton = '';
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  if (isLoggedIn(authState)) {
    logoutButton = <button className="button" onClick={onLogoutClick.bind(this)}>Log Out</button>;
  }

  return (
    <div className={cn(styles.mainHeader)}>
      <a href="/" className={cn(styles.logo)}>PZ</a>
      {logoutButton}
    </div>
  );

  function onLogoutClick() {
    return logout(dispatch);
  }
}
