import { RadioGroup, RadioList, Radio, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup variant="bordered" aria-label="roles">
            <RadioList>
                <Radio value="developer"><Text>Developer</Text></Radio>
                <Radio value="designer">
                    <Text>Designer</Text>
                </Radio>
            </RadioList>
        </RadioGroup>
    );
}
