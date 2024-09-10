import { Inline, Badge, Div, FloatingBadge } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline gap={32}>
            <FloatingBadge placement="top left">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge indeterminate></Badge>
            </FloatingBadge>
            <FloatingBadge placement="bottom left">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge indeterminate></Badge>
            </FloatingBadge>
            <FloatingBadge placement="bottom right">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge indeterminate></Badge>
            </FloatingBadge>
            <FloatingBadge placement="top right">
                <Div height="core_320" width="core_320" backgroundColor="primary-weak" />
                <Badge indeterminate></Badge>
            </FloatingBadge>
        </Inline>
    );
}
