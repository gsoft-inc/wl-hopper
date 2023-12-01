export interface NavItem {
    label: string;
    path: string;
    status: "ready" | "not-ready";
}

export const navigation: NavItem[] = [
    {
        "label": "Tokens",
        "path": "/tokens/getting-started/introduction",
        "status": "ready"
    },
    {
        "label": "Icons",
        "path": "/icons/getting-started/introduction",
        "status": "ready"
    },
    {
        "label": "Components",
        "path": "/components/installation",
        "status": "not-ready"
    }
];
