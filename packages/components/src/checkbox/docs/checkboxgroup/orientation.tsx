import { Checkbox, CheckboxGroup, CheckboxList, Inline, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap="inline-xl">
            <CheckboxGroup orientation="horizontal">
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <CheckboxGroup orientation="vertical">
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
        </Inline>
    );
}
