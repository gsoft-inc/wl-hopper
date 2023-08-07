import type { TransformedToken } from "style-dictionary";

export const handleTypes = (data: TransformedToken[]): string[] | undefined => {
    if (!data) {
        return;
    }

    const types = data.map((token: TransformedToken) => token.type);
    const filtredTypes = types.filter((type: string) => type !== undefined);

    return [...new Set(filtredTypes)];
};
