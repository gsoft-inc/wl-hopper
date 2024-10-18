import { Select, SelectItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            aria-label="Roles"
            isAutoMenuWidth
            popoverProps={{
                placement: "top start"
            }}
        >
            <SelectItem id="designer">Designer</SelectItem>
            <SelectItem id="developer">Developer</SelectItem>
            <SelectItem id="manager">Manager</SelectItem>
        </Select>
    );
}
