import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar className="toolBar">
            <img className="logo" src={require('../assets/logo.png')} alt="logo"/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
