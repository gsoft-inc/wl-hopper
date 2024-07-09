import { RadioGroup, RadioList, Radio, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup variant="bordered">
            <RadioList>
                <Radio value="developer"><Text>Developer</Text></Radio>
                <Radio value="designer">
                    <Text>Designer</Text>
                </Radio>
            </RadioList>
        </RadioGroup>
    );
}
