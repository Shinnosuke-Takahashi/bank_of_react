import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                {debitsView()}
                <Link to="/">Return to Home</Link>
            </div>
        );
    }
}

export default Debits;

// const Debits = (props) => {
//     let debitsView = () => {
//         const {debits} = props;
//         return debits.map((debit) => {
//             let date = debit.date.slice(0,10);
//             return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//         })
//     }
//     // return
// }