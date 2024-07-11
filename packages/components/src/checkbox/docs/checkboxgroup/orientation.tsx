import { Checkbox, CheckboxGroup, CheckboxList, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap="inline-xl">
            <CheckboxGroup orientation="horizontal">
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <CheckboxGroup orientation="vertical">
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
        </Inline>
    );
}
