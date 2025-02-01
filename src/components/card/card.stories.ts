import type { Meta, StoryObj } from '@storybook/react';
import {Card} from "@/components/card/card";

const meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {control: ''},
    },
    args: { },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: '-12.96%',
    },
};