import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceBox } from '../../src';

const meta = {
  title: 'Example/experienceBox',
  component: ExperienceBox,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ExperienceBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {
    theme: 'dark'
  }
};
