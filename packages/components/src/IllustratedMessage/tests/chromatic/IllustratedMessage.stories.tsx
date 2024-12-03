
import { Div, Image, Stack, Text } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { IllustratedMessage } from "../../index.ts";

import { Nasa } from "./assets/index.ts";


const meta = {
    title: "Components/IllustratedMessage",
    component: IllustratedMessage
} as Meta<typeof IllustratedMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: () => (
        <IllustratedMessage>
            <Image src={Nasa} alt="Nasa" UNSAFE_width="150px" />
            <Text slot="heading">Can't find "Saturn"</Text>
            <Text slot="description">Try searching for something else.</Text>
        </IllustratedMessage>
    )
} satisfies Story;

export const VeryLongTitle = {
    render: () => (
        <IllustratedMessage>
            <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
            <Text slot="heading">Can't find "Saturn" or "Mars" or another continent.</Text>
            <Text slot="description">Try searching for something else.</Text>
        </IllustratedMessage>
    )
} satisfies Story;

export const VeryLongText = {
    render: () => (
        <IllustratedMessage>
            <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
            <Text slot="heading">Can't find "Saturn"</Text>
            <Text slot="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit metus neque, non pharetra enim tincidunt dictum.
                Fusce in ultricies turpis, vitae finibus nunc. Quisque laoreet sit amet eros eget volutpat. Pellentesque non nulla dui. Sed nec felis quam. Vestibulum velit magna, fringilla ut neque cursus, porta rhoncus nulla. Suspendisse auctor sollicitudin tortor, quis viverra tellus egestas sed.
                Pellentesque ut dignissim nisi. Duis sit amet ex bibendum, pharetra purus eget, varius massa. In pulvinar dui quis dignissim commodo. Nulla facilisi..
            </Text>
        </IllustratedMessage>
    )
} satisfies Story;

export const NoTitle = {
    render: () => (
        <IllustratedMessage>
            <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
            <Text slot="description">Try searching for something else.</Text>
        </IllustratedMessage>
    )
} satisfies Story;

export const NoDimensions = {
    render: () => (
        <Stack>
            <IllustratedMessage>
                <Image src={Nasa} alt="Nasa" UNSAFE_width="150px" />
                <Text slot="heading">Can't find "Saturn"</Text>
                <Text slot="description">Try searching for something else.</Text>
            </IllustratedMessage>
            <IllustratedMessage>
                <Image src={Nasa} alt="Nasa" UNSAFE_width="150px" />
                <Text slot="heading">Can't find "Saturn"</Text>
                <Text slot="description">Try searching for something else.</Text>
            </IllustratedMessage>
        </Stack>
    )
} satisfies Story;

export const Zoom = {
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <IllustratedMessage border="warning">
                    <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
                    <Text slot="heading">Can't find "Saturn"</Text>
                    <Text slot="description">Try searching for something else.</Text>
                </IllustratedMessage>
            </Div>
            <Div className="zoom-out">
                <IllustratedMessage border="warning">
                    <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
                    <Text slot="heading">Can't find "Saturn"</Text>
                    <Text slot="description">Try searching for something else.</Text>
                </IllustratedMessage>
            </Div>
        </Stack>
    )
} satisfies Story;

export const Styling = {
    render: () => (
        <Stack>
            <IllustratedMessage border="warning">
                <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
                <Text slot="heading">Can't find "Saturn"</Text>
                <Text slot="description">Try searching for something else.</Text>
            </IllustratedMessage>
            <IllustratedMessage className="border-red">
                <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
                <Text slot="heading">Can't find "Saturn"</Text>
                <Text slot="description">Try searching for something else.</Text>
            </IllustratedMessage>
            <IllustratedMessage style={{ border: "1px solid red" }}>
                <Image src={Nasa} alt="Nasa" UNSAFE_width="240px" />
                <Text slot="heading">Can't find "Saturn"</Text>
                <Text slot="description">Try searching for something else.</Text>
            </IllustratedMessage>
        </Stack>
    )
} satisfies Story;
