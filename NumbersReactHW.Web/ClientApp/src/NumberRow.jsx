import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { isSelected, onSelectClicked, isLocked, number} = this.props;

        return (<tr>
            <td>{number} </td>
            <td>
                <button onClick={onSelectClicked} disabled={isLocked} className={isSelected ? "btn btn-danger" : "btn btn-primary"}>
                    {isSelected ? "Remove from Selected" : "Add to Selected"}
                </button>
            </td>
        </tr>);
    }
}

export default NumberRow;