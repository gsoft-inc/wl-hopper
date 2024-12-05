import { Button, ButtonGroup, Content, Heading, IllustratedMessage, Stack, SvgImage } from "@hopper-ui/components";

import { NoResults } from "../assets/index.ts";

export default function Example() {
    return (
        <Stack>
            <IllustratedMessage>
                <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
                <Heading>No results found</Heading>
                <Content>Try searching for something else.</Content>
                <Button>Try again</Button>
            </IllustratedMessage>
            <IllustratedMessage>
                <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
                <Heading>No results found</Heading>
                <Content>Try searching for something else.</Content>
                <ButtonGroup>
                    <Button variant="secondary">Back</Button>
                    <Button>Try again</Button>
                </ButtonGroup>
            </IllustratedMessage>
        </Stack>
    );
}
