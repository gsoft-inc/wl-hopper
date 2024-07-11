import { IconList, Inline, Switch, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Switch>
                <Text>Save</Text>
                <SparklesIcon />
            </Switch>
            <Switch>
                <Text>Save</Text>
                <IconList>
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
            </Switch>
        </Inline>
    );
}
