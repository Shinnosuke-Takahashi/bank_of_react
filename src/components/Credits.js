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
    constructor () {
        super()
        this.state = {
            credit: {
                description: '',
                amount: 0
            },
        }
    }

    handleChange = (e) => {
        const updatedCredit = {...this.state.credit}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedCredit[inputField] = inputValue
    
        this.setState({credit: updatedCredit})
    }
    
    handleSubmit  = (e) => {
        e.preventDefault()
        this.props.addCredit(this.state.credit)
    }
        
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="description"> Description: </label>
                        <input type="text" name="description" onChange={this.handleChange} value={this.state.credit.description} />
                    </div>
                    <div>
                    <label htmlFor="amount"> Amount: </label>
                        <input type="text" name="amount"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default Credits;