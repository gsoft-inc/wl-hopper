import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'Ui/Image',
    component: Image
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: 'https://placebear.com/640/360',
        alt: 'Image',
        width: 640,
        height: 360
    }
}
