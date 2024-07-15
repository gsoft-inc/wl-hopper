import { RadioField, RadioGroup, RadioList, Radio, Text } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selected, setSelected] = useState<string>("designer");

    return (
        <RadioGroup
            aria-label="Roles"
            value={selected}
            onChange={setSelected}
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
