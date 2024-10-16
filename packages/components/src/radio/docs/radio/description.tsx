import { Radio, RadioField, RadioGroup, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup aria-label="roles">
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField description="Team Manager">
                    <Radio value="manager">Manager</Radio>
                </RadioField>
            </RadioList>
        </RadioGroup>
    );
}
