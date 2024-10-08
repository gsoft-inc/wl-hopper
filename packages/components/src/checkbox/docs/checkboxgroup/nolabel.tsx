import { Checkbox, CheckboxGroup, CheckboxList } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup aria-label="Roles">
            <CheckboxList>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
