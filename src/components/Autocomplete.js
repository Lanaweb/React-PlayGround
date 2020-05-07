import React from 'react';
import SearchOptions from './SearchOptions';

class Autocomplete extends React.Component {
    state = {
        input: "",
        suggestions: [],
    }

    arrayOfWords = ["cats", "california", "catering", "cigar"]

    getSuggestions = (input) => {
        let listSuggestions = [];
        for (let word of this.arrayOfWords) {
            if (input.length === 0) {
                return listSuggestions;
            }
            if (word.includes(input)) {
                listSuggestions.push(word)
            }
        }
        return listSuggestions;
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value,
            suggestions: this.getSuggestions(e.target.value),
        })

    }



    render() {
        return (
            <div className="search">
                <label>Search: <input value={this.state.input} onChange={this.handleInput} type="text" /></label>
                <SearchOptions options={this.state.suggestions} />
            </div>
        )
    }

}
export default Autocomplete;