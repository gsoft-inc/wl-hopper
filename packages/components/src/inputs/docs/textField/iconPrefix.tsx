import { TextField, Label } from "@hopper-ui/components";
import { SearchIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <TextField placeholder="Enter a name" prefix={<SearchIcon />}>
            <Label>Name:</Label>
        </TextField>
    );
}
