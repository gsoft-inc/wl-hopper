import { Image, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <Image src="/frog.jpg" alt="Frog" width="core_1280" shape="rounded" />
            <Image src="/frog.jpg" alt="Frog" width="core_1280" shape="circular" />
        </Inline>
    );
}
