import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

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
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
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
