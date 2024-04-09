import React from 'react'
import SelectedNumberItem from './SelectedNumberItem';
import NumberRow from './NumberRow';
import { v4 as uuidv4 } from 'uuid';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumberIds: []
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * 500);
    }

    addNumber = () => {
        this.setState({ numbers: [...this.state.numbers, { number: this.getRandomNumber(), id: uuidv4() }] });
    }

    onSelectClicked = (number) => {
        const { selectedNumbers } = this.state;

        if (selectedNumbers.map(n => n.id).includes(number.id)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(n => n.id !== number.id) })

        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, number] })
        }
    }

    onLockClick = (id) => {
        const { lockedNumberIds } = this.state;

        if (lockedNumberIds.includes(id)) {
            this.setState({ lockedNumberIds: lockedNumberIds.filter(n => n !== id) })

        } else {
            this.setState({ lockedNumberIds: [...lockedNumberIds, id] })
        }
    }

    render() {
        const { numbers, lockedNumberIds, selectedNumbers } = this.state;

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
                    {numbers.map(n => <NumberRow key={n.id} number={n.number}
                        isSelected={selectedNumbers.map(x => x.id).includes(n.id)}
                        onSelectClicked={() => this.onSelectClicked(n)}
                        isLocked={lockedNumberIds.includes(n.id)}
                    />)}
                </tbody>
            </table>

            {Boolean(selectedNumbers.length) && <div className="row p-5 rounded">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Selected Numbers</h1>
                    <ul className="list-group">
                        {selectedNumbers.map(n =>
                            <SelectedNumberItem key={n.id} number={n.number}
                                onLockClick={() => this.onLockClick(n.id)}
                                isLocked={lockedNumberIds.includes(n.id)}
                            />)}
                    </ul>
                </div>
            </div>};
        </>);
    }
}

export default NumberTable;
