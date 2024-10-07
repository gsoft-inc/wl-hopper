import { Checkbox, CheckboxGroup, CheckboxList, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup isDisabled>
            <Label>Roles</Label>
            <CheckboxList>
                <Checkbox value="option1">Developer</Checkbox>
                <Checkbox value="option2">Designer</Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
