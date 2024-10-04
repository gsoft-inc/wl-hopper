import { Select, SelectOption, SelectOptions } from "@hopper-ui/components";
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
        <Select
            aria-label="list of options"
            items={list.items as Iterable<Character>}
        >
            <SelectOptions
                listBoxProps={{ 
                    isLoading: list.isLoading,
                    onLoadMore: list.loadMore
                }}
                maxHeight="core_1280"
            >
                {(item: Character) => {
                    const { name } = item;

                    return <SelectOption id={name}>{name}</SelectOption>;
                }}
            </SelectOptions>
        </Select>
    );
}
