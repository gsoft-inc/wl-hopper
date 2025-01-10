import { SegmentedControl, SegmentedControlItem } from "@hopper-ui/components";

export default function Example() {
    return (
        <SegmentedControl width="100%" aria-label="Types of frog">
            <SegmentedControlItem id="common" flex={1}>Common</SegmentedControlItem>
            <SegmentedControlItem id="american" flex={1}>American Bullfrog</SegmentedControlItem>
            <SegmentedControlItem id="month" flex={1}>Red-Eyed Tree</SegmentedControlItem>
            <SegmentedControlItem id="year" flex={1}>Golden Mantella</SegmentedControlItem>
        </SegmentedControl>
    );
}
