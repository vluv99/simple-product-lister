import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from './pill';

const meta = {
    title: 'Example/Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {control: 'text'},
        variant: {control: 'text'},
    },
    args: { },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '-12.96%',
    },
};

export const Big: Story = {
    args: {
        text: '-12.96%',
        variant: "big"
    },
};