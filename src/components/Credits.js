import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
    render() {
        return (
            <div>
                <h1>Credits</h1>
                {creditsView()}
                <Link to="/">Return to Home</Link>
            </div>
        );
    }
}

export default Credits;