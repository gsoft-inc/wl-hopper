import { Badge, Div, FloatingBadge, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap={32}>
            <FloatingBadge overlap="rectangular">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge>NEW</Badge>
            </FloatingBadge>
            <FloatingBadge overlap="circular">
                <Div height="core_320" width="core_320" borderRadius={999} backgroundColor="primary-weak" />
                <Badge>NEW</Badge>
            </FloatingBadge>
            <FloatingBadge overlap="rectangular">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge isIndeterminate></Badge>
            </FloatingBadge>
            <FloatingBadge overlap="circular">
                <Div height="core_320" width="core_320" borderRadius={999} backgroundColor="primary-weak" />
                <Badge isIndeterminate></Badge>
            </FloatingBadge>
        </Inline>
    );
}
