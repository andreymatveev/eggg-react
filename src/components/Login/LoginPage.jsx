import React from 'react';
// import AuthService from "../../classes/AuthService";

export class LoginPage extends React.Component {

  name = '';
  password = '';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input name="name" onChange={e => this.name = e.target.value}/>
        <input name="password" type="password" onChange={e => this.password = e.target.value}/>
        <button>Log in</button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    // return AuthService.login({
    //   name: this.name,
    //   password: this.password,
    // }).then(() => {
    //   this.props.history.push('/news');
    // });
  }
}
