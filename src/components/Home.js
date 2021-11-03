import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://media.istockphoto.com/photos/bank-picture-id626702872?k=20&m=626702872&s=612x612&w=0&h=sTDEN_vs_6LVV1iK9z103QhCR9nKWXiYZrWwVBnomKo=" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <h1></h1>
          <Link to="/LogIn">Log In</Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;