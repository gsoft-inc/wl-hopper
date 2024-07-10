import { Checkbox, CheckboxGroup, CheckboxList, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup>
            <CheckboxList>
                <Checkbox value="option1">Option 1</Checkbox>
                <Checkbox value="option2">Option 2</Checkbox>
            </CheckboxList>
            <HelperMessage>Select one to continue</HelperMessage>
        </CheckboxGroup>
    );
}
