import { useLocalizedString } from "../../i18n/index.ts";
import { Text } from "../../typography/index.ts";

import styles from "./CharacterCount.module.css";

export interface CharacterCountProps {
    charactersLeft: number;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export function CharacterCount({ charactersLeft, isDisabled, isInvalid, ...props }: CharacterCountProps) {
    const stringFormatter = useLocalizedString();

    const accessibilityString = stringFormatter.format("Input.charactersLeft", { charLeft: charactersLeft });

    return (
        <Text
            {...props}
            aria-label={accessibilityString}
            className={styles["hop-CharacterCount"]}
            data-disabled={isDisabled || undefined}
            data-invalid={isInvalid || undefined}
            role="status"
            size="xs"
        >
            {charactersLeft}
        </Text>
    );
}
