import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './index'

const meta = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('close'),
    title: 'Modal Title',
    children: 'Modal Content'
  },
};
