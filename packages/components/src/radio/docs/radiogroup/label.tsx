import { Radio, RadioField, RadioGroup } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup label="Roles">
            <Radio value="developer">Developer</Radio>
            <Radio value="designer">Designer</Radio>
            <RadioField>
                <Radio value="manager">Manager</Radio>
            </RadioField>
        </RadioGroup>
    );
}
