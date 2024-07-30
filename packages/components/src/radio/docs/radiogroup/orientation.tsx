import { Inline, RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap="inline-xl">
            <RadioGroup orientation="horizontal" aria-label="roles">
                <RadioList>
                    <Radio value="manager">Manager</Radio>
                    <Radio value="designer">Designer</Radio>
                </RadioList>
            </RadioGroup>
            <RadioGroup orientation="vertical" aria-label="roles">
                <RadioList>
                    <Radio value="manager">Manager</Radio>
                    <Radio value="designer">Designer</Radio>
                </RadioList>
            </RadioGroup>
        </Inline>
    );
}
