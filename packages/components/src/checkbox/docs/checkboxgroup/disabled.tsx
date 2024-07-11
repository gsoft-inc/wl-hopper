import { Checkbox, CheckboxGroup, CheckboxList } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup isDisabled>
            <CheckboxList>
                <Checkbox value="option1">Developer</Checkbox>
                <Checkbox value="option2">Designer</Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
