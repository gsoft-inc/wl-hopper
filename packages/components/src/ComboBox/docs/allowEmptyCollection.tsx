import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            allowsEmptyCollection
            aria-label="pets"
            fieldChildren={<Label>Animals</Label>}
        >
            {[]}
        </ComboBox>
    );
}
