import { Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        children: "Software built for everyone to do their best work"
    };

    return (
        <Stack>
            <Label size="xs" {...props} />
            <Label size="sm" {...props} />
            <Label size="md" {...props} />
            <Label size="lg" {...props} />
            <Label size="xl" {...props} />
            <Label size="2xl" {...props} />
        </Stack>
    );
}
