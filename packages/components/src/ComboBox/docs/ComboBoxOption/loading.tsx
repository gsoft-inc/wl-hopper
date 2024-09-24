import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Animals</Label>}
            listBoxProps={{ isLoading: true }}
        >
            {[]}
        </ComboBox>
    );
}
