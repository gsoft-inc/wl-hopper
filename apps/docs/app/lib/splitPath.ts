import path from "path";

export function splitPath(pathStr: string | undefined | null): string[] | undefined {
    if (!pathStr) {
        return undefined;
    }

    return pathStr.split(path.sep);
}
