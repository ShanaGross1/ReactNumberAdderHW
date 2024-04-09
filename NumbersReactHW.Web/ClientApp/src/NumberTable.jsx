import React from 'react'
import SelectedNumbers from './SelectedNumbers';
import NumberRow from './NumberRow';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * 500);
    }

    addNumber = () => {
        this.setState({ numbers: [...this.state.numbers, this.getRandomNumber()] });
    }

    onSelectClicked = (number) => {
        if (this.state.selectedNumbers.includes(number)) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.filter(n => n !== number) })

        } else {
            this.setState({ selectedNumbers: [...this.state.selectedNumbers, number] })
        }
    }

    onLockClick = (number) => {
        if (this.state.lockedNumbers.includes(number)) {
            this.setState({ lockedNumbers: this.state.lockedNumbers.filter(n => n !== number) })

        } else {
            this.setState({ lockedNumbers: [...this.state.lockedNumbers, number] })
        }
    }

    render() {
        const { numbers, lockedNumbers, selectedNumbers } = this.state;

        return (<>
            <button onClick={this.addNumber} className="btn btn-success btn-lg w-100">Add</button>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <td>Number</td>
                        <td>Add/Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {numbers.map(n => <NumberRow number={n}
                        isSelected={selectedNumbers.includes(n)}
                        onSelectClicked={() => this.onSelectClicked(n)}
                        isLocked={lockedNumbers.includes(n)}
                    />)}
                </tbody>
            </table>

            {Boolean(selectedNumbers.length) && <div className="row p-5 rounded">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Selected Numbers</h1>
                    <ul className="list-group">
                        {selectedNumbers.map(n =>
                            <SelectedNumbers number={n}
                                onLockClick={() => this.onLockClick(n)}
                                isLocked={lockedNumbers.includes(n)}
                            />)}
                    </ul>
                </div>
            </div>};
        </>);
    }
}

export default NumberTable;
