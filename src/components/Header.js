import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <button><Link to="/autocomplete">Autocomplete</Link></button>
        <button><Link to="/gallery">Gallery</Link></button>
        <button><Link to="/miusicvideo">MusicVideo</Link></button>
        <button><Link to="/tabs">Tabs</Link></button>
        <button><Link to="/catsinfo">Catsinfo</Link></button>
        <button><Link to="/price">Price</Link></button>
        <button><Link to="/loginform">LogIn Form</Link></button>
        <button><Link to="/profileform">Profile Form</Link></button>
        <button><Link to="/userlist">User List</Link></button>
      </div>
    )
  }
}

export default Header