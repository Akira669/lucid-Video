import React, { Component } from 'react';

//components
import Logo from './templates/Logo';
import Nav from './templates/Nav';

class Header extends Component {

  render() {
    return (
        <div>
          <Logo />
          <Nav />
        </div>
    );
  }

}

export default Header;

