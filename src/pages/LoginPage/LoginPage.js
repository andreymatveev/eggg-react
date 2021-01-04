import React from 'react';
import {isLoggedIn, login} from "../../context/actions";
import {useAuthDispatch, useAuthState} from "../../context/context";

import styles from "./LoginPage.module.scss";

function LoginPage(props) {

  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useAuthDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    let payload = {name, password};
    try {
      let response = await login(dispatch, payload);
      if (!response || response.token) {
        return;
      }
      props.history.push('/');
    } catch (error) {
      console.log('err', error);
    }
  }

  return (
    <div className="content">
      <form className={'form ' + styles.loginForm} onSubmit={onSubmit.bind(this)}>
        <div className="form__row form__row_margin-s">
          <input name="name" type="text" onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form__row form__row_margin-s">
          <input name="password" type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form__controls">
          <button className="form__control button" type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export {LoginPage};
