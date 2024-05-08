import fs from "fs";
import path from "path";
import docgenTs, {type ComponentDoc, PropItem} from "react-docgen-typescript";

interface ComponentData {
    name: string;
    filePath: string;
}

interface Group {
    [key: string]: PropItem;
}

type Groups = { [key: string]: Group }

type GroupsConfig = {
    [key: string]: string | string[]
}

export interface ComponentDocWithGroups extends ComponentDoc {
    groups: Groups;
}

const PACKAGES = path.join(process.cwd(), "..", "..", "packages", "components", "src");
const COMPONENT_DATA = path.join(process.cwd(), "datas", "components");

const tsConfigParser = docgenTs.withDefaultConfig({
    propFilter: (prop) => {
        // Remove props from StyledSystemProps
        return prop?.parent?.name !== "StyledSystemProps";
    }
});

async function writeFile(filename: string, data: ComponentDocWithGroups[]) {
    if (!fs.existsSync(COMPONENT_DATA)) {
        fs.mkdirSync(COMPONENT_DATA)
    }

    fs.writeFile(`${COMPONENT_DATA}/${filename}.json`, JSON.stringify(data), function (err) {
        if (err) {
            console.error(err)
            throw err;
        }
        console.log(`${filename} api is created!`)
    })
}

function getComponentName(filePath: string) {
    return path.basename(filePath, path.extname(filePath));
}

function getFormattedData(data: ComponentDoc[]): ComponentDocWithGroups[] {
    // Define the groups and their corresponding terms

    const groupsConfig: GroupsConfig = {
        events: "Events",
        a11y: ["Aria", "Focusable"],
        layout: "Slot",
        // Add more groups here as needed
    };

    // Define the exceptions that should be added to a specific group
    // The first element is the prop name and the second is the group key
    const groupsExceptions = [["type", "default"], ["autoFocus", "default"]];

    return data.map(component => {
        // Destructure and ignore id and ref from component.props
        const {key, ref, ...props} = component.props;
        console.log("autoFocus", props.type);

        // Initialize the groups
        const groups: Groups = {
            default: {},
            ...Object.keys(groupsConfig).reduce((acc, group) => ({...acc, [group]: {}}), {}),
        };

        Object.entries(props).forEach(([key, prop]) => {
            let added = false;

            // Check each group to see if the prop should be added to it
            Object.entries(groupsConfig).forEach(([group, term]) => {
                if (Array.isArray(term)) {
                    term.forEach(t => {
                        if (prop.parent?.name.includes(t)) {
                            groups[group][key] = prop;
                            added = true;
                        }
                    });
                } else if (prop.parent?.name.includes(term)) {
                    groups[group][key] = prop;
                    added = true;
                }
            });

            // Validates if the props that are in the groupsExceptions array then adds them to the corresponding group
            groupsExceptions.forEach(([propName, groupKey]) => {
                if (prop.name === propName && groups.hasOwnProperty(groupKey)) {
                    Object.entries(groups).forEach(([groupName, groupProps]) => {
                        if (groupProps.hasOwnProperty(propName)) {
                            groups[groupKey][propName] = groupProps[propName];
                            delete groups[groupName][propName];
                            added = true;
                        }
                    });
                }
            });

            // If the prop wasn't added to any group, add it to the default group
            if (!added) {
                groups.default[key] = prop;
            }
        });

        return {
            ...component,
            groups
        };
    })
}

async function generateComponentList(source: string): Promise<(ComponentData | undefined)[]> {
    const subdirs = fs.readdirSync(source);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(source, subdir);

        // Checks if the path corresponds to a directory
        if (fs.statSync(res).isDirectory()) {
            return generateComponentList(res);
        }

        // Checks whether the file is in the docs or tests directory
        if (/\/(docs|tests)\/|index\.ts$/.test(res)) {
            return;
        }

        // Checks whether the file is a .ts or .tsx file
        if (/\.tsx?$/.test(res)) {
            const name = getComponentName(res);
            return {name, filePath: res};
        }
    }));

    return files.flat().filter(Boolean) as ComponentData[]
}

async function generateComponentData() {
    console.log('Start api generation for components');

    // const components = await generateComponentList(PACKAGES);
    // Data for the tests only
    const components = [{
        name: "Button",
        filePath: `${PACKAGES}/buttons/src/Button.tsx`
    }]

    if (!components.length) {
        console.error('No components found');
        return;
    }

    for (const component of components) {
        if (component) {

            const data = tsConfigParser.parse(component.filePath);
            const {name} = component;
            const formattedData = getFormattedData(data);

            await writeFile(name, formattedData);
        }
    }

    return;
}

generateComponentData().then(() => console.log('🎉 Success')).catch(err => console.error(err));
