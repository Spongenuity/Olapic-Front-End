import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import OlaSlider from './components/Slider';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p>Pew Pew</p> */}
        <OlaSlider/>
      </div>
    );
  }
}

export default App;
