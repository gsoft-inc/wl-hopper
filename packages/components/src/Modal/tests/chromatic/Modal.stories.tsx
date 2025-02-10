import {
    Button,
    ButtonGroup,
    Card,
    Content,
    Footer,
    Header,
    Heading,
    Image,
    Modal,
    ModalTrigger,
    Text
} from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { Frog, MossyFrog } from "../../assets/index.ts";

const meta = {
    title: "Components/Modal",
    component: Modal,
    args: {
        isDismissible: true
    }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                <Heading>Fascinating Frog Facts!</Heading>
                <Content>
                    <Text>
                        Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                    </Text>
                </Content>
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const image = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                <Image src={Frog} alt="Frog" />
                <Heading>Fascinating Frog Facts!</Heading>
                <Content>
                    <Text>
                        Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                    </Text>
                </Content>
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const choice = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                <Heading>Fascinating Frog Facts!</Heading>
                <Content>
                    <Card>
                        <Image alt="Frog" src={Frog} />
                        <Heading>Frog</Heading>
                        <Content>
                             Common frogs are found in ponds, marshes, and forests across the world. Unlike some of their flashier cousins, they rely on stealth and speed rather than bright colors to survive.
                        </Content>
                        <Button variant="secondary">Choose</Button>
                    </Card>
                    <Card>
                        <Image alt="Mossy Frog" src={MossyFrog} />
                        <Heading>Mossy Frog</Heading>
                        <Content>
                            A mossy tree frog with rough, bark-like skin, blending perfectly into its surroundings for camouflage and protection.
                        </Content>
                        <Button variant="secondary">Choose</Button>
                    </Card>
                </Content>
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const header = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                <Heading>Fascinating Frog Facts!</Heading>
                <Header>Nature’s Little Acrobats</Header>
                <Content>
                    <Text>
                        Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                    </Text>
                </Content>
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const footer = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                <Heading>Fascinating Frog Facts!</Heading>
                <Content>
                    <Text>
                        Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                    </Text>
                </Content>
                <Footer>
                    Copyright 2025
                </Footer>
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const button = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                {({ close }) => (
                    <>
                        <Heading>Fascinating Frog Facts!</Heading>
                        <Content>
                            <Text>
                        Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                            </Text>
                        </Content>
                        <Button variant="primary" onPress={close}>Save</Button>
                    </>
                )}
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const buttonGroup = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                {({ close }) => (
                    <>
                        <Heading>Fascinating Frog Facts!</Heading>
                        <Content>
                            <Text>
                                Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                            </Text>
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={close}>Cancel</Button>
                            <Button variant="primary" onPress={close}>Save</Button>
                        </ButtonGroup>
                    </>
                )}
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;

export const NonDismissable = {
    ...Default,
    args: {
        isDismissible: false
    }
} satisfies Story;

export const everything = {
    render: args => (
        <ModalTrigger>
            <Button variant="primary">Open modal</Button>
            <Modal {...args}>
                {({ close }) => (
                    <>
                        <Image src={Frog} alt="Frog" />
                        <Heading>Fascinating Frog Facts!</Heading>
                        <Header>Nature’s Little Acrobats</Header>
                        <Content>
                            <Text>
                                Frogs are amphibians, meaning they can live both in water and on land! With their powerful legs, some species can jump over 20 times their body length—that’s like a human leaping over a school bus!
                            </Text>
                        </Content>
                        <Footer>
                            Copyright 2021
                        </Footer>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={close}>Cancel</Button>
                            <Button variant="primary" onPress={close}>Save</Button>
                        </ButtonGroup>
                    </>
                )}
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;
