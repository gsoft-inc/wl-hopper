import { IconList, Stack } from "@hopper-ui/components";
import { StarIcon, StarSolidIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Stack alignX="center">
            <IconList size="sm">
                <StarSolidIcon />
                <StarSolidIcon />
                <StarSolidIcon />
                <StarSolidIcon />
                <StarIcon />
            </IconList>
            <IconList size="md">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </IconList>
            <IconList size="lg">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </IconList>
        </Stack>
    );
}
