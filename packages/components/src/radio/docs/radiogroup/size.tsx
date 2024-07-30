import { Inline, RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <RadioGroup size="sm" aria-label="roles">
                <RadioList>
                    <Radio value="manager">Manager</Radio>
                    <Radio value="designer">Designer</Radio>
                </RadioList>
            </RadioGroup>
            <RadioGroup size="md" aria-label="roles">
                <RadioList>
                    <Radio value="manager">Manager</Radio>
                    <Radio value="designer">Designer</Radio>
                </RadioList>
            </RadioGroup>
        </Inline>
    );
}
