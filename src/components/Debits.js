import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }
    return (
        <div>
            <h1> Debits </h1>
            {debitsView()}

            <Link to="/userProfile">User Profile</Link>
            <h1></h1>
            <Link to="/LogIn">Log In</Link>
            <h1></h1>
            <Link to="Credits">Credits</Link>
            <h1></h1>
            <Link to="/">Return to Home</Link>
            <h1></h1>  
        </div>
    )
}

export default Debits;