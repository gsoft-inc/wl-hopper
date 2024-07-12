import { Heading, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = { children: "Hello, World!" };

    return (
        <Stack>
            <Heading level={1} {...props} />
            <Heading level={2} {...props} />
            <Heading level={3} {...props} />
            <Heading level={4} {...props} />
            <Heading level={5} {...props} />
            <Heading level={6} {...props} />
        </Stack>
    );
}
