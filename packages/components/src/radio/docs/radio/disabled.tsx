import { RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup>
            <RadioList>
                <Radio value="manager" isDisabled>Manager</Radio>
                <Radio value="designer">Designer</Radio>
            </RadioList>
        </RadioGroup>
    );
}
