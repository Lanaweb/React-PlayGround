import React from 'react'

class Sidebar extends React.Component {
    render() {
        let { menu, arr } = this.props;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += i;
        }


        return (
            <div>
                <h2> Sidebar {sum}</h2>
                {menu.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        )
    }
}

export default Sidebar 