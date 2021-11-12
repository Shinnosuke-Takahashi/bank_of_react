import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div>
                <h1>Credits</h1>
                {creditsView()}
                <Link to="/">Return to Home</Link>
            </div>
        );
    }
=======
    render(){
        return (
            <div>
            <h1>Credits</h1>
            <Link to="/">Return to Home</Link>
        </div>
        )}
>>>>>>> b55e574ef295fcb93a295e219b2ba67025203cd5
}

export default Credits;