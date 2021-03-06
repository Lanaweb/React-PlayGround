import React from 'react';
import SearchOptions from './SearchOptions';

class Autocomplete extends React.Component {
    state = {
        input: "",
        suggestions: [],
    }

    arrayOfWords = ["cats", "california", "catering", "cigar","you are a cat mom"]

    optionsRef = React.createRef()

    getSuggestions = (input) => {
        let listSuggestions = [];
        for (let word of this.arrayOfWords) {
            if (input.length === 0) {
                return listSuggestions;
            }
            // if (word.includes(input)) {
            //     listSuggestions.push(word)
            // }
            let index = word.indexOf(input)
            console.log(word,index);
            if (index !== -1) {
                listSuggestions.push([word, index, index+input.length])
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

    changeInput = (value) => {
        this.setState({
            input:value,
            suggestions: [],
        })

    }



    handleKeyDown = (e) =>{
        console.log(e.key)
        if(e.key==="ArrowDown"){
            this.optionsRef.current.moveDown()
        }
        else if(e.key==="ArrowUp"){
            this.optionsRef.current.moveUp()
        }
        else if(e.key==="Enter"){
            this.optionsRef.current.handleClick();
        }
        else if(e.key==="Escape"){
            this.setState({suggestions: []});
        }
    }


    render() {
        return (
            <div className="search">
                <label>Search: <input value={this.state.input} onChange={this.handleInput} type="text" onKeyDown={this.handleKeyDown} /></label>
                <SearchOptions 
                    options={this.state.suggestions} 
                    ref={this.optionsRef}
                    changeInput={this.changeInput }
                />
            </div>
        )
    }

}
export default Autocomplete;