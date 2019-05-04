import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Transporter } from './Transporter';

storiesOf('Transporter', module).add('Normal', () => <Transporter />);