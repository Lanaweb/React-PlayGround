import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Ads from './Ads';
import Counter from './Counter';


class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Sidebar  arr={this.props.arr} let menu={["first","second","third","forth"]}/>
                <Content />
                <Counter />
                <Ads  />
            </div>
        )
    }
}

export default Main