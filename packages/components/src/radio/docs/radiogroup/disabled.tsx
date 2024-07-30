import { RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup isDisabled aria-label="roles">
            <RadioList>
                <Radio value="manager">Manager</Radio>
                <Radio value="designer">Designer</Radio>
            </RadioList>
        </RadioGroup>
    );
}
