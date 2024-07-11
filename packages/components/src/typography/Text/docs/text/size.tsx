import { Text, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        children: "Software built for everyone to do their best work"
    };

    return (
        <Stack>
            <Text size="xs" {...props} />
            <Text size="sm" {...props} />
            <Text size="md" {...props} />
            <Text size="lg" {...props} />
            <Text size="xl" {...props} />
            <Text size="2xl" {...props} />
        </Stack>
    );
}
