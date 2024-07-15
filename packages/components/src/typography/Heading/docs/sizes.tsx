import { Heading, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = { children: "Hello, World!" };

    return (
        <Stack>
            <Heading size="xs" {...props} />
            <Heading size="sm" {...props} />
            <Heading size="md" {...props} />
            <Heading size="lg" {...props} />
            <Heading size="xl" {...props} />
            <Heading size="2xl" {...props} />
            <Heading size="3xl" {...props} />
        </Stack>
    );
}
