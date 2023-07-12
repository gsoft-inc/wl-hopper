export function formatInlineCss(str: string) {
    // remove all line breaks, extra spaces and tabs
    return str.replace(/(\r\n|\n|\r|\s\s)/gm, "");
}
