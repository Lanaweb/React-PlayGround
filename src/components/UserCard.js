import React from 'react';
import Frame from './Frame';

// class UserCard extends React.Component{

//     render(){
//         return(
//             <div className="user-card">
//                 <img src={this.props.img} alt="a cat" height="242" width="242"></img>
//                 <p>{this.props.name}</p>
//             </div>
//         )

//     }
// }

// export default UserCard;


function UserCard(props){ //functional component usually used when there is no need in state

    return(
        <div className="user-card">
            <Frame>
                <img src={props.img} alt="a cat" height="242" width="242"></img>
                <p>{props.name}</p>
            </Frame>

        </div>
        
    )

}

export default UserCard;