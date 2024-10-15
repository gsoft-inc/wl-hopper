import { Checkbox, CheckboxField, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <CheckboxField size="sm" description="Team Manager">
                <Checkbox>Manager</Checkbox>
            </CheckboxField>
            <CheckboxField size="md" description="Team Manager">
                <Checkbox>Manager</Checkbox>
            </CheckboxField>
        </Inline>
    );
}
