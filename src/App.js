import React, { Component } from 'react';

import Lyrics from './components/Lyrics/Lyrics';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lyrics isEmbedChord={true}>[F] Good morning!</Lyrics>
      </div>
    );
  }
}

export default App;
