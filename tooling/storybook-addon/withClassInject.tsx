import { makeDecorator } from "@storybook/preview-api";
import { useEffect, type ReactNode } from "react";

const PROVIDER_CLASSNAME = "hop-HopperProvider";
const DEFAULT_CLASSNAME = "hop";
const STORYBOOK_CLASSNAME = "sb-show-main";

export const withClassInject = makeDecorator({
    name: "withClassInject",
    parameterName: "css",
    wrapper: (getStory, context) => {
        const StoryWithEffect = () => {
            useEffect(() => {
                const providerElement = document.getElementsByClassName(PROVIDER_CLASSNAME)[0];
                const storybookElement = document.getElementsByClassName(STORYBOOK_CLASSNAME)[0];
                const regex = /hop-\d+-\d+-\d+/g;

                if (providerElement && storybookElement) {
                    const classes = providerElement.className;
                    const matchedClasses = classes.match(regex) || "";
                    storybookElement.classList.add(DEFAULT_CLASSNAME, matchedClasses[0]);
                }
            }, []);

            return getStory(context) as ReactNode;
        };

        return <StoryWithEffect />;
    }
});
