import type { Meta, StoryObj } from '@storybook/react';

import { CircleButton } from './index';

const meta = {
  title: 'Components/CircleButton',
  component: CircleButton,
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('click')
  },
};
