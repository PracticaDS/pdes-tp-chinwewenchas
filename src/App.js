import React, { Component } from 'react';
import './App.css';
import { Ficha } from './components/Ficha';
import { Tablero } from './components/Tablero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          //<h1>Small Memotest</h1>
          <Tablero columnas={16} filas={16} />
        </header>
      </div>
    );
  }
}

export default App;
