import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from "@/components/rating/rating";

const meta = {
    title: 'Example/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {control: 'number'},
    },
    args: { },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 2.33,
    },
};