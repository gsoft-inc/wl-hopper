import { Switch, SwitchField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <SwitchField isDisabled>
            <Switch>
                <Text>Save</Text>
            </Switch>
            <Text>This will override your changes.</Text>
        </SwitchField>
    );
}
