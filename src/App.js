import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

//style
import './App.css';

//components
import Header from './components/Header';
import Content from './components/Content'

export default class App extends Component {

  render() {
    return (
                <div className="App">
                    <Header />
                </div>
    );
  }

}
