import { Header, Inline, Select, Section, Collection, Label } from "@hopper-ui/components";

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
                items={options}
                fieldChildren={<Label>Items</Label>}
            >
                {item => {
                    const { id, name } = item;

                    return <Select.Option id={id}>{name}</Select.Option>;
                }}
            </Select>
            <Select
                items={optionsWithSections}
                fieldChildren={<Label>Section</Label>}
            >
                {section => {
                    const { name: sectionName, children } = section;

                    return (
                        <Section id={sectionName}>
                            <Header>{sectionName}</Header>
                            <Collection items={children}>
                                {item => <Select.Option id={item.id}>{item.name}</Select.Option>}
                            </Collection>
                        </Section>
                    );
                }}
            </Select>
        </Inline>
    );
}
