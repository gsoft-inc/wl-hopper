import { Header, Inline, ListBox, ListBoxItem, Section } from "@hopper-ui/components";
import { Collection } from "react-aria-components";

interface ListItemProps {
    id: number | string;
    name: string;
}

interface ListSectionProps {
    name: string;
    children: ListItemProps[];
}

export default function Example() {
    const options = [
        { id: 2, name: "Fred" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Gabriel" },
        { id: 6, name: "Sarah" },
        { id: 7, name: "Louise" },
        { id: 8, name: "Karen" }
    ] satisfies ListItemProps[];

    const optionsWithSections = [
        {
            name: "Boy Names", children: [
                { id: 2, name: "Fred" },
                { id: 3, name: "Bob" },
                { id: 4, name: "Gabriel" }
            ]
        },
        {
            name: "Girl Names", children: [
                { id: 6, name: "Sarah" },
                { id: 7, name: "Louise" },
                { id: 8, name: "Karen" }
            ]
        }
    ] satisfies ListSectionProps[];

    return (
        <Inline alignY="flex-start">
            <ListBox
                selectionMode="single"
                aria-label="Names"
                items={options}
            >
                {item => {
                    const listItem = item as ListItemProps;

                    return <ListBoxItem id={listItem.name}>{listItem.name}</ListBoxItem>;
                }}
            </ListBox>
            <ListBox
                selectionMode="single"
                aria-label="Names"
                items={optionsWithSections}
            >
                {section => {
                    const listSection = section as ListSectionProps;

                    return (
                        <Section id={listSection.name}>
                            <Header>{listSection.name}</Header>
                            <Collection items={listSection.children}>
                                {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
                            </Collection>
                        </Section>
                    );
                }}
            </ListBox>
        </Inline>
    );
}
