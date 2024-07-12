import { Label, LabelContext, SlotProvider } from "@hopper-ui/components";

export default function Example() {
    return (
        <SlotProvider values={[
            [LabelContext, { size: "xl" }]
        ]}
        >
            <Label>Software built for everyone to do their best work</Label>
        </SlotProvider>
    );
}
