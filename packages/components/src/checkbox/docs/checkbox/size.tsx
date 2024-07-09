import { Checkbox, Inline, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <Checkbox size="sm">
                <Text>Option 1</Text>
            </Checkbox>
            <Checkbox size="md">
                <Text>Option 1</Text>
            </Checkbox>
        </Inline>
    );
}
