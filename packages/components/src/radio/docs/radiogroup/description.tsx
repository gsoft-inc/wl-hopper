import { HelperMessage, RadioField, RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup aria-label="roles">
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField>
                    <Radio value="manager">Manager</Radio>
                </RadioField>
            </RadioList>
            <HelperMessage>Select one to continue</HelperMessage>
        </RadioGroup>
    );
}
