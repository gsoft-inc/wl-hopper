import { Button, ButtonGroup, Content, Footer, Header, Heading, Image, Modal, ModalTrigger } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";


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
                {({ close }) => (
                    <>
                        <Image src="https://i.imgur.com/Z7AzH2c.png" alt="Sky over roof" />
                        <Heading>
                            <Header>Header</Header>
                        </Heading>
                        <Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </Content>
                        <Footer>
                            <ButtonGroup>
                                <Button onPress={close} variant="secondary">Cancel</Button>
                                <Button onPress={close}>Save</Button>
                            </ButtonGroup>
                        </Footer>
                    </>
                )}
            </Modal>
        </ModalTrigger>
    )
} satisfies Story;
