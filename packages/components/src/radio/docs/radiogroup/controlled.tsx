import { RadioField, RadioGroup, RadioList, Radio, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup
            aria-label="Roles"
            onChange={() => {}}
            value="designer"
        >
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField>
                    <Radio value="manager">Manager</Radio>
                    <Text slot="description">Team Manager</Text>
                </RadioField>
            </RadioList>
        </RadioGroup>
    );
}
