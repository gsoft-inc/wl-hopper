import { Checkbox, CheckboxGroup } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup aria-label="Roles">
            <Checkbox value="developer">Developer</Checkbox>
            <Checkbox value="designer">Designer</Checkbox>
        </CheckboxGroup>
    );
}
