import {Meta, StoryObj} from "@storybook/react";

import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Component/Title',
  component: Title,
  argTypes: {
    as: {
      control: { type: 'select'}
    },
    level: {
      control: { type: 'select'}
    }
  }
}

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Nothing is cheap'
  }
}