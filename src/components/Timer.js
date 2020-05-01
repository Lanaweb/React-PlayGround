import React from 'react';

class Timer extends React.Component {
    state = {
        sec: 0
    };
    interval = null;

    start = () => {
        this.interval && clearInterval(this.interval);
        this.interval = setInterval(
            () => this.setState({ sec: this.state.sec + 1 }),
            1000
        )

    }

    stop = () => {
        clearInterval(this.interval)
    }

    reset = () => {
        this.setState({ sec: 0 })
    }


    render() {
        return (
            <div>
                <div className="timer"> {this.state.sec} </div>

                <button onClick={this.start}>Start</button>

                <button onClick={this.stop}>Stop</button>

                <button onClick={this.reset}>Reset</button>

            </div>
        )
    }
}
export default Timer;