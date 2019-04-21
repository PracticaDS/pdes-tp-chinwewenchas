import React from 'react';
import { storiesOf } from '@storybook/react';
import { Board } from './Board';
import { action } from '@storybook/addon-actions';

storiesOf('Board', module)
  .add('Grande', () => <Board columns={16} rows={16} />)
  .add('Normal', () => <Board columns={8} rows={8} />)
  .add('Pequeño', () => <Board columns={4} rows={4}/>);
