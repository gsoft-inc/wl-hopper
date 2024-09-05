import { Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select isAutoMenuWidth
            aria-label="Animals"
            popoverProps={{
                placement: "top start"
            }}
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}
