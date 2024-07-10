import { IconList, Inline, Switch, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Switch>
                <Text>Label</Text>
                <SparklesIcon />
            </Switch>
            <Switch>
                <Text>Label</Text>
                <IconList>
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
            </Switch>
        </Inline>
    );
}
