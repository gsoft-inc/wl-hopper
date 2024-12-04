import { IllustratedMessage, Image, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <IllustratedMessage>
            <Image src="/frog.jpg" aria-label="No Results" />
            <Text slot="heading">No results found</Text>
            <Text slot="description">It seems like there’s nothing here for now. Hop on and add something new!</Text>
        </IllustratedMessage>
    );
}
