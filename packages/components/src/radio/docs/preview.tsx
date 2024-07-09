import { RadioGroup, Radio, RadioList } from "@hopper-ui/components";

export default function Example() {
    return (
        <RadioGroup>
            <RadioList>
                <Radio value="option1">Option 1</Radio>
                <Radio value="option2">Option 2</Radio>
            </RadioList>
        </RadioGroup>
    );
}
