import { Inline, Switch, SwitchField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <SwitchField size="sm">
                <Switch>
                    <Text>Save</Text>
                </Switch>
            </SwitchField>
            <SwitchField size="md">
                <Switch>
                    <Text>Save</Text>
                </Switch>
            </SwitchField>
        </Inline>
    );
}
