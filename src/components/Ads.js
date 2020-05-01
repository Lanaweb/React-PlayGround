import React from 'react';

class Ads extends React.Component {
    render() {

        let hasAds=false;

        return (
            <h2> I am in  {hasAds?"Ads":"noAds"}</h2>
        )
        
        
    }
}

export default Ads 