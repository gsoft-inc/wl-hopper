import { Checkbox, IconList, Inline, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Checkbox>
                <Text>Label</Text>
                <SparklesIcon />
            </Checkbox>
            <Checkbox>
                <Text>Label</Text>
                <IconList>
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
            </Checkbox>
        </Inline>
    );
}
