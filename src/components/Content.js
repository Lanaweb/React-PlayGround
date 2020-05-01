import React from 'react';
import Recommended from './Recommended';

class Content extends React.Component{
    render(){
        let hasRecommended=false;

        return (
            <div className='content'>
               {hasRecommended && <Recommended/>}
                <p> Apart from that, another beauty ritual which the Whenever Wherever singer truly follows is the inclusion of sunscreen in her skincare regime. She further talked about the importance of keeping your teeth clean to flash a smile as often as you can. Shakira believes in the philosophy that a smile is the best type of makeup one can wear.  </p>
            </div>
        )
    }
}

export default Content