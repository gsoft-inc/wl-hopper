import { Grid, Div, type DivProps } from "@hopper-ui/components";

function Square(props: DivProps) {
    return <Div backgroundColor="decorative-option1" minHeight="core_640" minWidth="core_640" {...props} />;
}

export default function Example() {
    return (
        <Div width="100%" paddingY="core_320">
            <Grid autoColumns="1fr">
                <Square gridColumn={2} backgroundColor="decorative-option1" />
                <Square backgroundColor="decorative-option3" />
                <Square backgroundColor="decorative-option4" />
            </Grid>
        </Div>
    );
}
