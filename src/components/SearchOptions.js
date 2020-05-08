import React from 'react';

class SearchOptions extends React.Component {
    state = {
        selected: null,
    }

    moveDown() {
        if (this.state.selected == null) {
            this.setState({ selected: 0 })
        }
        else if (this.state.selected < this.props.options.length - 1) {
            this.setState({ selected: this.state.selected + 1 })
        }

    }

    moveUp() {
        if (this.state.selected === null) {
            this.setState({ selected: this.props.options.length-1 })
        }
        else if (this.state.selected >0) {
            this.setState({ selected: this.state.selected - 1 })
        }
    }


    renderOneItem(option, i) {
        let [word, start, end] = option // ["tobecatmom", 4, 7]
        let suggestionClass = i == this.state.selected ? "selected" : ""
        return (
            <p
                key={i}
                className={suggestionClass}
                onMouseOver={() => this.setState({ selected: i })}

            >
                {word.slice(0, start)}
                <b>{word.slice(start, end)}</b>
                {word.slice(end)}
            </p>
        )
    }




    render() {
        let options = this.props.options;


        return (
            <div className="options" >
                {options.map((option, i) => this.renderOneItem(option, i))}
            </div>

        )
    }

}

export default SearchOptions;