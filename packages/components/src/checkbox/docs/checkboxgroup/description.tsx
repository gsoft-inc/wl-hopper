import { Checkbox, CheckboxGroup, CheckboxList, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup>
            <CheckboxList>
                <Checkbox value="option1">Developer</Checkbox>
                <Checkbox value="option2">Designer</Checkbox>
            </CheckboxList>
            <HelperMessage>Select one to continue</HelperMessage>
        </CheckboxGroup>
    );
}
