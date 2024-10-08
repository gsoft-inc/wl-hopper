import { Checkbox, CheckboxGroup, CheckboxList, HelperMessage, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup>
            <Label>Roles</Label>
            <CheckboxList>
                <Checkbox value="option1">Developer</Checkbox>
                <Checkbox value="option2">Designer</Checkbox>
            </CheckboxList>
            <HelperMessage>Select one to continue</HelperMessage>
        </CheckboxGroup>
    );
}
