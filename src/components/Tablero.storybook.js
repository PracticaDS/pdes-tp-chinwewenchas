import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tablero } from './Tablero';
import { action } from '@storybook/addon-actions';

storiesOf('Tablero', module)
  .add('Grande', () => <Tablero columnas={16} filas={16} />)
  .add('Normal', () => <Tablero columnas={8} filas={8} />)
  .add('Pequeño', () => <Tablero columnas={4} filas={4} onCompletado={action("On completado")} />);
