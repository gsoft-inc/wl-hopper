import { Checkbox, CheckboxGroup, CheckboxList } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup
            aria-label="Roles"
            onChange={() => {}}
            value={[
                "designer"
            ]}
        >
            <CheckboxList>
                <Checkbox value="developer">
      Developer
                </Checkbox>
                <Checkbox value="designer">
      Designer
                </Checkbox>
                <Checkbox value="manager">
      Manager
                </Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
