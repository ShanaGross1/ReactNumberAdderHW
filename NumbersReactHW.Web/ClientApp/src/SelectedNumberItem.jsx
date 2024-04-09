import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { number, onLockClick, isLocked } = this.props;

        return (
            <li className="list-group-item"> {number}
                <button className="ms-5 btn btn-primary" onClick={onLockClick}>  {isLocked ? "Unlock" : "Lock"}
                </button>
            </li>
        );
    }
}

export default NumberRow;