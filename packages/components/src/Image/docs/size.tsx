import { Image, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <Image src="/frog.jpg" alt="Frog" width="core_640" height="auto" />
            <Image src="/frog.jpg" alt="Frog" width="core_800" height="auto" />
            <Image src="/frog.jpg" alt="Frog" width="core_1280"height="auto" />
        </Inline>
    );
}
