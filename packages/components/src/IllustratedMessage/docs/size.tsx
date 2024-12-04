import { IllustratedMessage, Image, Stack, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack gap="core_480" alignX="center">
            <IllustratedMessage size="sm">
                <Image src="/frog.jpg" aria-label="Frog" />
                <Text slot="heading">No results found</Text>
                <Text slot="description">It seems like there’s nothing here for now. Hop on and add something new.</Text>
            </IllustratedMessage>
            <IllustratedMessage size="md">
                <Image src="/frog.jpg" aria-label="Frog" />
                <Text slot="heading">No results found</Text>
                <Text slot="description">It seems like there’s nothing here for now. Hop on and add something new.</Text>
            </IllustratedMessage>
            <IllustratedMessage size="lg">
                <Image src="/frog.jpg" aria-label="Frog" />
                <Text slot="heading">No results found</Text>
                <Text slot="description">It seems like there’s nothing here for now. Hop on and add something new.</Text>
            </IllustratedMessage>
        </Stack>

    );
}
