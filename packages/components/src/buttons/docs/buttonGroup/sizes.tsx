import { Button, ButtonGroup, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        children: [
            <Button key="1" variant="secondary">No, thanks</Button>,
            <Button key="2" variant="secondary">Remind me later</Button>,
            <Button key="3" variant="primary">Rate Now</Button>
        ]
    };

    return (
        <Stack>
            <ButtonGroup size="sm" {...props} />
            <ButtonGroup {...props} />
        </Stack>
    );
}
