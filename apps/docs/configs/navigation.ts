import { flags } from "../context/feature/flags.ts";

export interface NavItem {
    label: string;
    path: string;
    status: "ready" | "not-ready";
}

const isAlpha = flags.alpha;

export const navigation: NavItem[] = [
    {
        "label": "Getting Started",
        "path": `/getting-started/${isAlpha ? "react" : "individual-packages"}`,
        "status": "ready"
    },
    {
        "label": "Tokens",
        "path": "/tokens/overview/introduction",
        "status": "ready"
    },
    {
        "label": "Icons",
        "path": "/icons/overview/introduction",
        "status": "ready"
    },
    {
        "label": "Components",
        "path": "/components/component-list",
        "status": "not-ready"
    }
];
