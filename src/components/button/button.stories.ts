import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {control: 'text'},
        variant: {control: 'text'},
    },
    args: { },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'See details',
    },
};

export const Big: Story = {
    args: {
        label: 'Add to cart',
        variant: "big"
    },
};