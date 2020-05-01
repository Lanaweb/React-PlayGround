import React from 'react';

class CoupleButtons extends React.Component{
    a = null;

    clears=()=>{
        clearInterval(this.a);
    }
    

    render(){
        function sayHello(){
            console.log("Hello");
        }
        return (
            <div>
                <button onClick={()=>setTimeout(sayHello,2000)}>Sets TimeOut</button>

                <button onClick={()=>this.a=setInterval(sayHello,500)}>Sets Interval</button>

                <button onClick={this.clears}>Clears Interval</button>

            </div>
            )
    }
}
    export default CoupleButtons;     