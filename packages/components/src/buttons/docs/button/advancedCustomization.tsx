import { Button, ButtonContext, SlotProvider } from "@hopper-ui/components";

export default function Example() {
    return (
        <SlotProvider values={[
            [ButtonContext, { variant: "secondary", size: "sm" }]
        ]}
        >
            <Button>Save</Button>
        </SlotProvider>
    );
}
