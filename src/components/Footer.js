import React from 'react'

class Footer extends React.Component{
    state={
        showImg:false
    }
    displayImg=()=>this.setState({showImg:true})
    
    render(){
        return (
            <div>
                <div className="footer">Footer</div>
                {this.state.showImg && <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt ="asdfg"/>}
                <button onClick={this.displayImg}>Click me to display</button>
            </div>
        ) 
    }
}
 
export default Footer