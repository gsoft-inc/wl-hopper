import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Roles</Label>}
            listBoxProps={{ isLoading: true }}
        >
            {[]}
        </ComboBox>
    );
}
