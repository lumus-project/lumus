import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '.';
import config from '../config/ui/input.config';

export default {
    title: 'LumusInput',
    component: Input,
    argTypes: {
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
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LumusInput = Template.bind({});
