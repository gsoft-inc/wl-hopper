import { Checkbox, Inline, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <Checkbox size="sm">
                <Text>Developer</Text>
            </Checkbox>
            <Checkbox size="md">
                <Text>Designer</Text>
            </Checkbox>
        </Inline>
    );
}
