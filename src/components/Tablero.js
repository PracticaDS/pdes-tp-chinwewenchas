import React from 'react';
import { Ficha } from './Ficha';
import _ from 'lodash';
import './Tablero.css'
import { PropTypes } from 'prop-types';

export class Tablero extends React.Component {

 /* constructor(props) {
    super(props);
  }*/

  
  calculateStyle() {
    return {gridTemplateColumns: `repeat(${this.props.columnas}, fit-content(120px))`};
  }

  render() {
    const fichas = new Array();
    var index =0;
   for (var i = 0; i < this.props.filas; i++) {
      for (var z = 0; z < this.props.columnas; z++) {
    fichas.push(<Ficha
        id={index}
        key={index} />);
    index++;
  }
} 
    return <div style={this.calculateStyle()} className="tablero">{fichas}</div>
  }
}

Tablero.propTypes = {
  filas: PropTypes.number,
  columnas: PropTypes.number
}

Tablero.defaultProps = {
  filas: 16,
  columnas: 16
}