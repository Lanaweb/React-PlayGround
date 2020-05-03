import React from 'react';


class Price extends React.Component {

    render() {
        let price = this.props.value;
        let currency = this.props.currency;

        return <p> Price {price} {currency}</p>
    }
}

export default Price;