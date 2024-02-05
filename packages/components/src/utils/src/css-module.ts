import clsx, { type ClassValue } from "clsx";

export function cssModule(cssModules: { [key: string]: string }, componentName: string, ...modifiers : ClassValue[]) {
    const classes = clsx(modifiers).split(" ").filter(x => x && x !== "");

    return classes.reduce<string[]>((acc, className) => {
        const mergedClassName = `${componentName}--${className}`;
        if (cssModules[mergedClassName]) {
            acc.push(cssModules[mergedClassName]);
        }

        return acc;
    }, [cssModules[componentName]]).join(" ");
}
