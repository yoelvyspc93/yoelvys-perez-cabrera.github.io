import type { Meta, StoryObj } from '@storybook/react';

import { AboutCard } from './index'

const meta = {
  title: 'Components/AboutCard',
  component: AboutCard,
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: '12+',
    label: 'years of experience'
  },
};
