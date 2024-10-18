import { ComboBox, ComboBoxItem } from "@hopper-ui/components";
import { useAsyncList } from "react-stately";

interface Character {
    name: string;
}

export default function Example() {
    const list = useAsyncList({
        async load({ signal, cursor }) {
            const res = await fetch(cursor || "https://pokeapi.co/api/v2/pokemon", {
                signal
            });
            const json = await res.json();

            return {
                items: json.results,
                cursor: json.next
            };
        }
    });

    return (
        <ComboBox
            label="Roles"
            items={list.items as Iterable<Character>}
            maxHeight="core_1280"
            isLoading={list.isLoading}
            onLoadMore={list.loadMore}
        >
            {(item: Character) => {
                const { name } = item;

                return <ComboBoxItem id={name}>{name}</ComboBoxItem>;
            }}
        </ComboBox>
    );
}
