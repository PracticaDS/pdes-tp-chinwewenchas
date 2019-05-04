import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Transporter } from './Transporter';

storiesOf('Transporter', module)
.add('Left', () => <Transporter direction = {'left'}/>)
.add('Right', () => <Transporter direction = {'right'}/>)
.add('Down', () => <Transporter direction = {'down'}/>)
.add('Up', () => <Transporter direction = {'up'}/>);