import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// containers
import BibleBookSearchContainer from './containers/BibleBookSearchContainer';
import BibleAreaContainer from './containers/BibleAreaContainer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Greek Bible Reference</h1>
          </header>
          <BibleBookSearchContainer />
          <BibleAreaContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
