import { Select, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <Select fieldChildren={
                <Label>Animals</Label>
            }
            >
                <Select.Option id="dog">Dog</Select.Option>
                <Select.Option id="cat">Cat</Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <Select fieldChildren={
                <Label>Animals</Label>
            }
            size="md"
            >
                <Select.Option id="dog">Dog</Select.Option>
                <Select.Option id="cat">Cat</Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
        </Stack>
    );
}
