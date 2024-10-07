import { Collection, ComboBox, ComboBoxOption, ComboBoxOptions, Header, Inline, Label, Section } from "@hopper-ui/components";

interface ListItemProps {
    id: number | string;
    role: string;
}

interface ListSectionProps {
    role: string;
    children: ListItemProps[];
}

export default function Example() {
    const options = [
        { id: 2, role: "Designer" },
        { id: 3, role: "Developer" },
        { id: 4, role: "Manager" },
        { id: 6, role: "QA Engineer" },
        { id: 7, role: "Product Owner" },
        { id: 8, role: "Scrum Master" }
    ] satisfies ListItemProps[];

    const optionsWithSections = [
        {
            role: "Operations", children: [
                { id: 2, role: "Project Coordinator" },
                { id: 3, role: "QA Specialist" },
                { id: 4, role: "System Administrator" }
            ]
        },
        {
            role: "Creative Department", children: [
                { id: 6, role: "Designer" },
                { id: 7, role: "Designer" },
                { id: 8, role: "UX Researcher" }
            ]
        }
    ] satisfies ListSectionProps[];

    return (
        <Inline alignY="flex-start">
            <ComboBox
                items={options}
            >
                <Label>Items</Label>
                <ComboBoxOptions>
                    {(item: ListItemProps) => {
                        const { id, role } = item;

                        return <ComboBoxOption id={id}>{role}</ComboBoxOption>;
                    }}
                </ComboBoxOptions>
            </ComboBox>
            <ComboBox
                items={optionsWithSections}
            >
                <Label>Section</Label>
                <ComboBoxOptions>
                    {(section: ListSectionProps) => {
                        const { role: sectionName, children } = section;

                        return (
                            <Section id={sectionName}>
                                <Header>{sectionName}</Header>
                                <Collection items={children}>
                                    {item => <ComboBoxOption id={item.id}>{item.role}</ComboBoxOption>}
                                </Collection>
                            </Section>
                        );
                    }}
                </ComboBoxOptions>
            </ComboBox>
        </Inline>
    );
}
