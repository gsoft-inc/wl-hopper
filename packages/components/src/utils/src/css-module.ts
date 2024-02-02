import clsx, { type ClassValue } from "clsx";

export function cssModule(cssModules: { [key: string]: string }, componentName: string, ...values : ClassValue[]) {
    const classes = clsx(values).split(" ").filter(x => x && x !== "");
    console.log("AA", values, classes);

    return classes.reduce<string[]>((acc, className) => {
        const mergedClassName = `${componentName}--${className}`;
        if (cssModules[mergedClassName]) {
            acc.push(cssModules[mergedClassName]);
        } else {
            console.warn(`[Hopper] The class ${mergedClassName} is not defined in the css module for ${componentName}`);
        }

        return acc;
    }, [cssModules[componentName]]).join(" ");
}
