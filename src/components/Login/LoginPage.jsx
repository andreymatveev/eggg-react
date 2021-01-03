import React from 'react';
import {login} from "../../context/actions";
import {useAuthDispatch} from "../../context/context";

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
    <form onSubmit={onSubmit.bind(this)}>
      <input name="name" onChange={e => setName(e.target.value)}/>
      <input name="password" type="password" onChange={e => setPassword(e.target.value)}/>
      <button>Log in</button>
    </form>
  );
}

export {LoginPage};
