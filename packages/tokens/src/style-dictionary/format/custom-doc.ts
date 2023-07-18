import type { Dictionary, TransformedTokens } from "style-dictionary";

const handleTypes = (dataArray: TransformedTokens[]): string[] => {
    if (!dataArray) {
        return [];
    }

    const tokenType = dataArray.map(token => token.type);
    const filteredType = tokenType.filter(type => type !== undefined);
    const uniqueType = [...new Set(filteredType)];

    return uniqueType.map(type => type.toString());
};

export const customDoc = function ({ dictionary }: { dictionary: Dictionary }) {
    const types = handleTypes(dictionary.allTokens);

    const dataArray = types.map(type => {
        const formattedGroup = type.charAt(0).toUpperCase() + type.slice(1);
        let header = `\n  /**\n   * @tokens ${formattedGroup}s\n   * @presenter ${formattedGroup} \n   */\n\n`;
        const data = dictionary.allTokens.filter(token => {
            return token.type === type;
        });

        if (type === "mediaQuery" || type === "shadow" || type === "zIndex") {
            header = `\n  /**\n   * @tokens ${formattedGroup} \n   */\n\n`;
        }

        return {
            header,
            data
        };
    });

    const storybookDocs = dataArray
        .map(function (tokens) {
            return (
                tokens.header +
                tokens.data
                    .map(props => `  --${props.name}: ${props.value};`)
                    .join("\n")
            );
        })
        .join("\n");

    return `:root {${storybookDocs}\n}`;
};
