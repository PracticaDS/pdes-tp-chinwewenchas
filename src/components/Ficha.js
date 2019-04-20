import React from 'react';

import "./Ficha.css"
import PropTypes from 'prop-types';

export class Ficha extends React.Component {


  render() {
      return <div className="ficha bocaAbajo"></div>;
    
  }
}

Ficha.propTypes = {
  id: PropTypes.number
}
