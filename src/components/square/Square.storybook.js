import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Square } from './Square';

storiesOf('Square', module).add('Normal', () => <Square />);