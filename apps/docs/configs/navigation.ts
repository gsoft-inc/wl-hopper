export interface NavItem {
    label: string;
    path: string;
    parentPath: string;
}

export const navigation: NavItem[] = [
    {
        "label": "Tokens",
        "path": "/tokens/getting-started/introduction",
        "parentPath": "/tokens"
    },
    {
        "label": "Icons",
        "path": "/icons",
        "parentPath": "/icons"
    },
    {
        "label": "Components",
        "path": "/components/installation",
        "parentPath": "/components"
    }
];
