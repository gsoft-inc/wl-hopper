import { Checkbox } from "../../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/index.ts";
import { IconList } from "../../../IconList/src/IconList.tsx";
import { Inline, Stack, Flex } from "../../../layout/index.ts";
import { Div } from "@hopper-ui/styled-system";
import { EditIcon } from "@hopper-ui/icons";

const meta = {
    title: "Components/Checkbox/Checkbox",
    component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
    play: async ({ canvasElement }) => {
        const checkboxLabels = canvasElement.querySelectorAll("label");

        checkboxLabels.forEach(checkboxLabel => {
            const checkbox = checkboxLabel.querySelector("input[type='checkbox']");
            if (checkbox && checkbox.getAttribute("disabled") !== "") { // don't try and force states on a disabled input
                if (checkbox.getAttribute("data-chromatic-force-press")) {
                    checkboxLabel.setAttribute("data-pressed", "true");
                    checkbox.removeAttribute("data-chromatic-force-press");
                }

                if (checkbox.getAttribute("data-chromatic-force-focus")) {
                    checkboxLabel.setAttribute("data-focus-visible", "true");
                    checkbox.removeAttribute("data-chromatic-force-focus");
                }

                if (checkbox.getAttribute("data-chromatic-force-hover")) {
                    checkboxLabel.setAttribute("data-hovered", "true");
                    checkbox.removeAttribute("data-chromatic-force-hover");
                }
            }
        });
    },
    render: props => (
        <Stack>
            <h1>Labeled</h1>
            <Inline alignY="end">
                <Checkbox {...props} size="sm">
                    Option 1
                </Checkbox>
                <Checkbox {...props} size="md">
                    Option 2
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox {...props} size="sm">
                    <Text>Option 1</Text>
                    <EditIcon />
                </Checkbox>
                <Checkbox {...props} size="md">
                    <Text>Option 2</Text>
                    <EditIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox {...props} size="sm">
                    <Text>Option 1</Text>
                    <IconList><EditIcon /><EditIcon /><EditIcon /></IconList>
                </Checkbox>
                <Checkbox {...props} size="md">
                    <Text>Option 2</Text>
                    <IconList><EditIcon /><EditIcon /><EditIcon /></IconList>
                </Checkbox>
            </Inline>
            <h1>Unlabeled</h1>
            <Inline alignY="end">
                <Checkbox {...props} size="sm" aria-label="Option 1" />
                <Checkbox {...props} size="md" aria-label="Option 2" />
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Option 1">
                    <EditIcon />
                </Checkbox>
                <Checkbox aria-label="Option 2">
                    <EditIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox {...props} size="sm" aria-label="Option 1">
                    <IconList><EditIcon /><EditIcon /><EditIcon /></IconList>
                </Checkbox>
                <Checkbox {...props} size="md" aria-label="Option 2">
                    <IconList><EditIcon /><EditIcon /><EditIcon /></IconList>
                </Checkbox>
            </Inline>
            <h1>Validation</h1>
            <Inline alignY="end">
                <Checkbox {...props} size="sm" isInvalid>
                    Option 1
                </Checkbox>
                <Checkbox {...props} size="md" isInvalid>
                    Option 2
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox {...props} size="sm" isInvalid>
                    <Text>Option 1</Text>
                    <EditIcon />
                </Checkbox>
                <Checkbox {...props} size="md" isInvalid>
                    <Text>Option 2</Text>
                    <EditIcon />
                </Checkbox>
            </Inline>
            <h1>States</h1>
            <Inline>
                <Stack>
                    <h2>Focus Visible</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" data-chromatic-force-focus>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" data-chromatic-force-focus>
                            Option 2
                        </Checkbox>
                    </Inline>
                    <h2>Hovered</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" data-chromatic-force-hover>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" data-chromatic-force-hover>
                            Option 2
                        </Checkbox>
                    </Inline>
                    <h2>Focus Visible and Hovered</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" data-chromatic-force-focus data-chromatic-force-hover>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" data-chromatic-force-focus data-chromatic-force-hover>
                            Option 2
                        </Checkbox>
                    </Inline>
                </Stack>
                <Stack>
                    <h2>Disabled & Focus Visible</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" isDisabled data-chromatic-force-focus>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" isDisabled data-chromatic-force-focus>
                            Option 2
                        </Checkbox>
                    </Inline>
                    <h2>Disabled & Hovered</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" isDisabled data-chromatic-force-hover>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" isDisabled data-chromatic-force-hover>
                            Option 2
                        </Checkbox>
                    </Inline>
                    <h2>Disabled & Focus Visible and Hovered</h2>
                    <Inline alignY="end">
                        <Checkbox {...props} size="sm" isDisabled data-chromatic-force-focus data-chromatic-force-hover>
                            Option 1
                        </Checkbox>
                        <Checkbox {...props} size="md" isDisabled data-chromatic-force-focus data-chromatic-force-hover>
                            Option 2
                        </Checkbox>
                    </Inline>
                </Stack>
            </Inline>
            <h1>Overflow</h1>
            <Flex alignItems="end" maxWidth="1/4">
                <Checkbox {...props}>PA-99-N2 event and possible exoplanet in galaxy</Checkbox>
            </Flex>
            <Flex alignItems="end" maxWidth="1/4">
                <Checkbox {...props}>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <EditIcon /><EditIcon />
                    </IconList>
                </Checkbox>
            </Flex>
            <h1>Zoom</h1>
            <Inline>
                <Div className="zoom-in">
                    <Checkbox {...props}>Option 1</Checkbox>
                </Div>
                <Div className="zoom-out">
                    <Checkbox {...props}>Option 2</Checkbox>
                </Div>
            </Inline>
        </Stack>
    )
};

export const Checked: Story = {
    ...Unchecked,
    args: {
        defaultSelected: true
    }
};

export const Indeterminate: Story = {
    ...Unchecked,
    args: {
        defaultSelected: true,
        isIndeterminate: true
    }
};
