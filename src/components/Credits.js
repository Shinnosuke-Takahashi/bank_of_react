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

            <Link to="/userProfile">User Profile</Link>
            <h1></h1>
            <Link to="/LogIn">Log In</Link>
            <h1></h1>
            <Link to="/Debits">Debits</Link>
            <h1></h1>
            <Link to="/">Return to Home</Link>
            <h1></h1>
        </div>
    )
}

export default Credits;