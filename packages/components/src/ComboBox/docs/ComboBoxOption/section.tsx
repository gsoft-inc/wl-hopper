import { ComboBox, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Animals</Label>}>
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
            <Section>
                <Header>More Animals</Header>
                <ComboBox.Option id="snake">Snake</ComboBox.Option>
                <ComboBox.Option id="chimpanzee">Chimpanzee</ComboBox.Option>
            </Section>
            <Section>
                <Header>Even More Animals</Header>
                <ComboBox.Option id="camel">Camel</ComboBox.Option>
                <ComboBox.Option id="zebra">Zebra</ComboBox.Option>
                <ComboBox.Option id="koala">Koala</ComboBox.Option>
            </Section>
        </ComboBox>
    );
}
