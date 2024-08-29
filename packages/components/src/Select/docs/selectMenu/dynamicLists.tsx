import { Header, Inline, Select, Section, Collection } from "@hopper-ui/components";

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
            <Select
                aria-label="Names"
                items={options}
            >
                {item => {
                    const listItem = item as ListItemProps;

                    return <Select.Option id={listItem.name}>{listItem.name}</Select.Option>;
                }}
            </Select>
            <Select
                aria-label="Names"
                items={optionsWithSections}
            >
                {section => {
                    const listSection = section as ListSectionProps;

                    return (
                        <Section id={listSection.name}>
                            <Header>{listSection.name}</Header>
                            <Collection items={listSection.children}>
                                {item => <Select.Option id={item.name}>{item.name}</Select.Option>}
                            </Collection>
                        </Section>
                    );
                }}
            </Select>
        </Inline>
    );
}
