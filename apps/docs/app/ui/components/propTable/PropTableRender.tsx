import Collapsible from "@/components/collapsible/Collapsible.tsx";
import Title from "@/components/title/Title.tsx";
import type { ReactNode } from "react";
import type { RenderRowReturn, FormatedGroupsData } from "@/app/ui/components/propTable/PropTable.tsx";

interface PropTableRenderProps {
    groupsData: FormatedGroupsData;
}

type Item = RenderRowReturn;

interface TableRowProps {
    items: { [group: string]: Item[] };
}

const TableRow = ({ items }: TableRowProps) => {
    if (!items) {
        return null;
    }

    const [name] = Object.keys(items);

    return items[name].map(item => {
        return (
            <tr key={item.id}>
                <th>{item.name}</th>
                <td>{item.type}</td>
                <td>{item.defaultValue.value}</td>
                <td>{item.description}</td>
            </tr>
        );
    });
};

const TableTemplate = ({ children }: { children: ReactNode }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

export function PropTableRender({ groupsData }: PropTableRenderProps) {
    return (
        <>
            {groupsData.map(group => {
                const [title] = Object.keys(group);

                return (
                    <>
                        {title === "default" ?
                            <TableTemplate>
                                <TableRow items={group} />
                            </TableTemplate> :
                            <Collapsible key={title}
                                title={<Title as="h3" level={3}>
                                    {title}
                                </Title>}
                            >
                                <TableTemplate>
                                    <TableRow items={group} />
                                </TableTemplate>
                            </Collapsible>
                        }
                    </>
                );
            })}
        </>
    );
}
