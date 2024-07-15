import { RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup isDisabled>
            <RadioList>
                <Radio value="manager">Manager</Radio>
                <Radio value="designer">Designer</Radio>
            </RadioList>
        </RadioGroup>
    );
}
