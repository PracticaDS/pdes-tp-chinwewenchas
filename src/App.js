import React, { Component } from 'react';
import './App.css';
import { Board } from './components/board/Board';

class App extends Component {


  constructor(props) {
    super(props);
    this.user = {
      ganancias: 0
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Ganancias: ${ this.user.ganancias }</h4>
        </header>
        <body>
          <Board columns={ 12 } rows={ 11 }/>
        </body>
      </div>
    );
  }
}

export default App;
