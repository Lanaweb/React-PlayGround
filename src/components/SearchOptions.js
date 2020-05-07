import React from 'react';

class SearchOptions extends React.Component{

    render(){
        let options=this.props.options;


        return(
            <div className="options">
                {
                    options.map(word =>
                        <p>{word}</p>
                )}
            </div>

        )
    }

}

export default SearchOptions;