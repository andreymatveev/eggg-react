import React from 'react';

// import AuthService from "../../classes/AuthService";

export class Header extends React.Component {
  render() {
    console.log(this.props);
    let logoutButton = '';
      // logoutButton = <button onClick={this.onLogoutClick.bind(this)}>Log Out</button>;

    return <div className="header">
      <a href="/" className="logo">PZ</a>
      {logoutButton}
    </div>
  }

  onLogoutClick() {
    // return AuthService.logout().then(() => {
    //   this.props.history.push('/');
    // });
  }
}
