import { ErrorMessage, HelperMessage, Label, RadioGroup, RadioList, Radio } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [isInvalid, setIsInvalid] = useState(true);

    function onChange(value: string) {
        // if value is empty, then it is invalid
        setIsInvalid(value.length === 0);
    }

    return (
        <RadioGroup onChange={onChange} isInvalid={isInvalid}>
            <HelperMessage>These are all excellent roles</HelperMessage>
            <ErrorMessage>Check this box and the description will appear</ErrorMessage>
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <Radio value="manager">Manager</Radio>
            </RadioList>
            <Label>Roles</Label>
        </RadioGroup>
    );
}
