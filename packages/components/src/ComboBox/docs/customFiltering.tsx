import { ComboBox, Label } from "@hopper-ui/components";
import { useMemo, useState } from "react";
import { useFilter } from "react-aria";

export default function Example() {
    const options = useMemo(() => [
        { id: 1, name: "Designer" },
        { id: 2, name: "Developer" },
        { id: 3, name: "Manager" },
        { id: 4, name: "QA Engineer" },
        { id: 5, name: "Product Owner" },
        { id: 6, name: "Scrum Master" },
        { id: 7, name: "UX Researcher" },
        { id: 8, name: "Business Analyst" },
        { id: 9, name: "DevOps Engineer" },
        { id: 10, name: "Data Scientist" }
    ], []);

    const { startsWith } = useFilter({ sensitivity: "base" });
    const [filterValue, setFilterValue] = useState("");
    const filteredItems = useMemo(
        () => options.filter(item => startsWith(item.name, filterValue)),
        [options, startsWith, filterValue]
    );

    return (
        <ComboBox
            fieldChildren={<Label>Roles</Label>}
            items={filteredItems}
            inputValue={filterValue}
            onInputChange={setFilterValue}
        >
            {item => <ComboBox.Option>{item.name}</ComboBox.Option>}
        </ComboBox>
    );
}
