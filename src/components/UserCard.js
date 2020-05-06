import React from 'react';

class UserCard extends React.Component{

    render(){
        return(
            <div className="user-card">
                <img src={this.props.img} alt="a cat" height="242" width="242"></img>
                <p>{this.props.name}</p>
            </div>
        )

    }
}

export default UserCard;