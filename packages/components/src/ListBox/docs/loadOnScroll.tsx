import { ListBox, ListBoxItem } from "@hopper-ui/components";
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
        <ListBox
            selectionMode="single"
            aria-label="list of options"
            items={list.items as Iterable<Character>}
            isLoading={list.isLoading}
            onLoadMore={list.loadMore}
            maxHeight="core_1280"
        >
            {item => {
                const listItem = item as Character;

                return <ListBoxItem id={listItem.name}>{listItem.name}</ListBoxItem>;
            }}
        </ListBox>
    );
}
