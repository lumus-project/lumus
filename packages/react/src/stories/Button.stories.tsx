import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button';
import config from '../config/ui/button.config';

export default {
    title: config.name,
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Button',
            control: 'text',
        },
        color: {
            options: Object.keys(config.classNames.variants.color),
            control: { type: 'radio' },
            defaultValue: 'base',
        },
        size: {
            options: Object.keys(config.classNames.variants.size),
            control: { type: 'select' },
            defaultValue: 'base',
        },
        radius: {
            options: Object.keys(config.classNames.variants.radius),
            control: { type: 'select' },
            defaultValue: 'base',
        },
        uppercase: {
            control: 'boolean',
            defaultValue: false,
        },
        full: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const LumusButton = Template.bind({});
