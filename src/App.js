import React, { Component } from 'react';
import './App.css';
import { Square } from './components/Square';
import { Board } from './components/Board';

class App extends Component {


 constructor(props){
    super(props);
    this.user = {
    ganancias: 0
  };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Ganancias: ${this.user.ganancias}</h4>
          <Board columns={12} rows={11}/>
        </header>
      </div>
    );
  }
}

export default App;
