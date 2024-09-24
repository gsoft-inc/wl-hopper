import { ComboBox, Label } from "@hopper-ui/components";
import { useMemo, useState } from "react";
import { useFilter } from "react-aria";

export default function Example() {
    const options = useMemo(() => [
        { id: 1, name: "Cat" },
        { id: 2, name: "Dog" },
        { id: 3, name: "Lizard" },
        { id: 4, name: "Zebra" },
        { id: 5, name: "Cow" },
        { id: 6, name: "Chimpanzee" },
        { id: 7, name: "Horse" },
        { id: 8, name: "Fish" },
        { id: 9, name: "Koala" },
        { id: 10, name: "Kangaroo" }
    ], []);

    const { startsWith } = useFilter({ sensitivity: "base" });
    const [filterValue, setFilterValue] = useState("");
    const filteredItems = useMemo(
        () => options.filter(item => startsWith(item.name, filterValue)),
        [options, startsWith, filterValue]
    );

    return (
        <ComboBox
            fieldChildren={<Label>Animals</Label>}
            items={filteredItems}
            inputValue={filterValue}
            onInputChange={setFilterValue}
        >
            {item => <ComboBox.Option>{item.name}</ComboBox.Option>}
        </ComboBox>
    );
}
