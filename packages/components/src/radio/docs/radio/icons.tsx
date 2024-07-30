import { IconList, RadioGroup, RadioList, Radio, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <RadioGroup aria-label="roles">
            <RadioList>
                <Radio value="developer"><SparklesIcon /><Text>Developer</Text></Radio>
                <Radio value="designer">
                    <Text>Designer</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Radio>
            </RadioList>
        </RadioGroup>
    );
}
