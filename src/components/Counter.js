import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    };

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2> {this.state.count} </h2>
                <button onClick={this.onClick}>Click Me</button>
            </div>
        )
    }
}

export default Counter