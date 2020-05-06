import React from 'react';


class Frame extends React.Component{

    render(){
        return(
                <div className="frame">
                    {this.props.children}
                </div>
        )
    }
}
export default Frame;
