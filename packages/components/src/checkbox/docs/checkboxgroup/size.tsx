import { Checkbox, CheckboxGroup, CheckboxList, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap="inline-xl">
            <CheckboxGroup size="sm">
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <CheckboxGroup size="md">
                <CheckboxList>
                    <Checkbox value="developer">Designer</Checkbox>
                    <Checkbox value="designer">Developer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
        </Inline>
    );
}
