import { ComboBox } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            label="Roles"
            listBoxProps={{
                isLoading: true
            }}
        >
            {[]}
        </ComboBox>
    );
}
