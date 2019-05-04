import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Seller } from './Seller';

storiesOf('Seller', module).add('Normal', () => <Seller />);