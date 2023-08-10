import Card from "./Card.tsx";

export default {
    title: "Components/Card",
    component: Card

};

export const Raised = {
    args: {
        children: "Card content",
        type: "raised"
    }
};

export const SecondLevel = {
    args: {
        children: "Card content",
        type: "second-level"
    }
};

export const Interactive = {
    args: {
        children: "Card content",
        type: "interactive"
    }
};
