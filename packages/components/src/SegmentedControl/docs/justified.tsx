import { SegmentedControl, SegmentedControlItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <SegmentedControl isJustified aria-label="Types of frog">
            <SegmentedControlItem id="american">American Bullfrog</SegmentedControlItem>
            <SegmentedControlItem id="month">Red-Eyed Tree</SegmentedControlItem>
            <SegmentedControlItem id="year">Golden Mantella</SegmentedControlItem>
            <SegmentedControlItem id="common">Common</SegmentedControlItem>
        </SegmentedControl>
    );
}
