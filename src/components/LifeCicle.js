import React from 'react';

class LifeCicle extends React.Component{
    state = {
        build: true
    };
    constructor(props){
        super(props)
        console.log('in constructor')
    }
    componentDidMount(){
        console.log('in DidMount')

    }

    componentWillUnmount(){
        console.log('in WillUnmount')
    }

    componentDidUpdate(){
        console.log('in DidUpdate')
    }

    render(){
        console.log('in render')
        
        return(
            <div> 
                <img src="https://i.pinimg.com/originals/c2/69/13/c269139a444df23254247d2a7cd83c4d.jpg " alt="tiger"/>
                <button onClick={()=>this.setState({build:"maybe"})}>My Button</button>
            </div>
        ) 
    }

}

// const LifeCicle = () => {
//     console.log('func')
//     return null
// }


export default LifeCicle 