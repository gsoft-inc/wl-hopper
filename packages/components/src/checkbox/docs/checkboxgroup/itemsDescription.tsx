import { Checkbox, CheckboxField, CheckboxGroup, CheckboxList } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup aria-label="roles">
            <CheckboxList>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <CheckboxField description="Team Manager">
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxField>
            </CheckboxList>
        </CheckboxGroup>
    );
}
