import { IconList, Inline, Switch } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Switch>
                Save
                <SparklesIcon />
            </Switch>
            <Switch>
                Save
                <IconList>
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
            </Switch>
        </Inline>
    );
}
