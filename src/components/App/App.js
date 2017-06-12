import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './normalize.css';
import './App.css';
import logo from './img/logo.png';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>
            <a href="/">
              <img src={logo} alt="OLX"/>
            </a>
          </h1>
        </header>
        <div className="App__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchItems: PropTypes.func.isRequired
};

export default App;
