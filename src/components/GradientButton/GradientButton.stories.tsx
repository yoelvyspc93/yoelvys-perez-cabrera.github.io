import type { Meta, StoryObj } from '@storybook/react';

import { GradientButton } from './index';

const meta = {
  title: 'Components/GradientButton',
  component: GradientButton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  children: <div>Yoelvys</div>
};
