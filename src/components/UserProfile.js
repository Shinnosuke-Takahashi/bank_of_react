import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <h1></h1>
          <Link to="/LogIn">Log In</Link>
          <h1></h1>
          <Link to="/Debits">Debits</Link>
          <h1></h1>
          <Link to="Credits">Credits</Link>
          <h1></h1>
          <Link to="/">Return to Home</Link>
          <h1></h1>

          <AccountBalance accountBalance={this.props.accountBalance}/>

        </div>
    );
  }
}

export default UserProfile;