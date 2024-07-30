import { TagGroup, Tag, TagList, Text, IconList } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="developer" size="sm">
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="designer" size="md">
                    <Text>Designer</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
                <Tag id="dentist" size="lg">
                    <Text>Dentist</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
            </TagList>
        </TagGroup>
    );
}
