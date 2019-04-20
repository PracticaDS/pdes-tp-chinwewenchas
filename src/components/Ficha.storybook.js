import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Ficha } from './Ficha';

storiesOf('Ficha', module).add('Normal', () => <Ficha />);