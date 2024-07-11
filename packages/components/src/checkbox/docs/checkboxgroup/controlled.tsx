import { Checkbox, CheckboxGroup, CheckboxList } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selected, setSelected] = useState<string[]>(["designer"]);

    return (
        <CheckboxGroup
            aria-label="Roles"
            onChange={setSelected}
            value={selected}
        >
            <CheckboxList>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <Checkbox value="manager">Manager</Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
