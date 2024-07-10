import { Label, RadioField, RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup>
            <Label>Roles</Label>
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField>
                    <Radio value="manager">Manager</Radio>
                </RadioField>
            </RadioList>
        </RadioGroup>
    );
}
