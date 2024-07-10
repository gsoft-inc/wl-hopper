import { Checkbox, CheckboxGroup, CheckboxList, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap="inline-xl">
            <CheckboxGroup orientation="horizontal">
                <CheckboxList>
                    <Checkbox value="option1">Option 1</Checkbox>
                    <Checkbox value="option2">Option 2</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <CheckboxGroup orientation="vertical">
                <CheckboxList>
                    <Checkbox value="option1">Option 1</Checkbox>
                    <Checkbox value="option2">Option 2</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
        </Inline>
    );
}
