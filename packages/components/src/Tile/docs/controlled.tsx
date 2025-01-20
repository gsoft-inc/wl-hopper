import type { Key } from "@hopper-ui/components";
import { useState } from "react";

import { Tile, TileGroup } from "../src/index.ts";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key>("day");

    const handleSelectionChange = (key: Key) => {
        if (selectedKey === key) {
            return;
        }

        setSelectedKey(key);
    };

    return (
        <TileGroup aria-label="Animals"
            selectedKey={selectedKey}
            onSelectionChange={handleSelectionChange}
        >
            <Tile id="frog">Frog</Tile>
            <Tile id="camel">Camel</Tile>
            <Tile id="elephant">Elephant</Tile>
        </TileGroup>
    );
}
