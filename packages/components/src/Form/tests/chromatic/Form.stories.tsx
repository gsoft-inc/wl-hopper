import {
    Button,
    ButtonGroup,
    Checkbox,
    ComboBox,
    ComboBoxOption,
    ComboBoxOptions,
    ErrorMessage,
    HelperMessage,
    Inline,
    Label,
    Radio,
    RadioGroup,
    Select,
    SelectOption,
    SelectOptions,
    Stack,
    Tag,
    TagGroup,
    TagList,
    TextArea,
    TextField
} from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { Form } from "../../src/Form.tsx";

const meta = {
    title: "Components/Forms/Form",
    component: Form,
    render: args => <Form {...args} />
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
    return (
        <>
            <Inline>
                <TextField type="email" placeholder="billings@acme.com" isRequired>
                    <Label>Email adress</Label>
                    <HelperMessage>Invoices will be sent to this email address.</HelperMessage>
                </TextField>
            </Inline>
            <RadioGroup label="I identify my gender as">
                <Radio value="man">Man</Radio>
                <Radio value="women">Women</Radio>
                <Radio value="non-binary">Non-Binary</Radio>
            </RadioGroup>
            <Inline>
                <TextField placeholder="John">
                    <Label>First name</Label>
                </TextField>
                <TextField placeholder="Doe">
                    <Label>Last name</Label>
                </TextField>
            </Inline>
            <TextField placeholder="Looney Tunes Inc.">
                <Label>Organization name</Label>
            </TextField>
            <Inline>
                <TextField placeholder="24 Sussex Drive">
                    <Label>Adress</Label>
                </TextField>
                <TextField placeholder="Apt or suite">
                    <Label>Apt/Suite</Label>
                </TextField>
            </Inline>
            <TextField placeholder="Old El Paso">
                <Label>City</Label>
            </TextField>
            <TextArea placeholder="Leave a comment">
                <Label>Comments</Label>
            </TextArea>
            <Checkbox>
                Agree to terms and conditions
            </Checkbox>
            <Select isRequired>
                <Label>Choose an animal</Label>
                <SelectOptions>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </SelectOptions>
            </Select>
            <ComboBox>
                <Label>Choose an animal</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog">Dog</ComboBoxOption>
                    <ComboBoxOption id="cat">Cat</ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <TagGroup selectionMode="single">
                <Label>Choose a place</Label>
                <TagList>
                    <Tag id="1">Canada</Tag>
                    <Tag id="2">US</Tag>
                </TagList>
            </TagGroup>
            <Button>Submit</Button>
        </>);
};

export const Default = {
    args: {
        children: <Template />
    }
} satisfies Story;

export const Small = {
    args: {
        ...Default.args,
        size: "sm"
    }
};

export const Disabled = {
    args: {
        ...Default.args,
        isDisabled: true
    }
};

export const Fluid = {
    args: {
        ...Default.args,
        isFluid: true
    }
};

export const LabelNecessityIndicator = {
    args: {
        ...Default.args,
        necessityIndicator: "label"
    }
};

export const AsteriskNecessityIndicator = {
    args: {
        ...Default.args,
        necessityIndicator: "asterisk"
    }
};

export const Validation = {
    render: () => (
        <Form validationErrors={{ username: "Sorry, this username is taken." }}>
            <TextField defaultValue="john_doe" name="username">
                <Label>Username</Label>
                <ErrorMessage />
            </TextField>
        </Form>
    )
};

export const ValidationBehaviorAria = {
    render: () => (
        <Form validationBehavior="aria">
            <TextField
                name="username"
                defaultValue="admin"
                isRequired
                validate={value => value === "admin" ? "Nice try." : null}
            >
                <Label>Username</Label>
                <ErrorMessage />
            </TextField>
            <Button type="submit">Submit</Button>
        </Form>
    )
};

export const ValidationBehaviorNative = {
    render: () => {
        return (
            <Form validationBehavior="native">
                <TextField
                    name="email"
                    type="email"
                    isRequired
                >
                    <Label>Email</Label>
                    <ErrorMessage>This field is required</ErrorMessage>
                </TextField>
                <ButtonGroup>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </ButtonGroup>
            </Form>
        );
    },
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);
        const [submitButton] = canvas.getAllByRole("button");

        await userEvent.click(submitButton);

        const errorRender = await canvas.findByText("This field is required");
        await expect(errorRender).toBeVisible();
    }
};

export const Styling = {
    render: () => {
        return (
            <Stack gap="core_320">
                <Form UNSAFE_border="1px solid red">
                    <TextField
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                    </TextField>
                    <Button type="submit">Submit</Button>
                </Form>

                <Form className="bg-red">
                    <TextField
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                    </TextField>
                    <Button type="submit">Submit</Button>
                </Form>

                <Form style={{ backgroundColor: "red" }}>
                    <TextField
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                    </TextField>
                    <Button type="submit">Submit</Button>
                </Form>
            </Stack>
        );
    }
};
