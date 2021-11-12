import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date  = credit.date.slice(0,10);
            return  <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    return (
        <div>
            <h1> Credits </h1>
            {creditsView()}
            <AccountBalance accountBalance={props.accountBalance}/>
            <CreditsComponent/>
        </div>
    )
}

class CreditsComponent extends Component {
    render() {
        return (
            <div>
                <Link to="/userProfile">User Profile</Link>
                <h1></h1>
                <Link to="/LogIn">Log In</Link>
                <h1></h1>
                <Link to="/Debits">Debits</Link>
                <h1></h1>
                <Link to="/">Return to Home</Link>
                <h1></h1>

                <h1></h1>
                <form>
                    <label>
                        Description:
                        <input/>
                    </label>
                    <label>
                        Amount:
                        <input/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Credits;