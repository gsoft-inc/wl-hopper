// @ts-check
// This file can not be in TypeScript since it is a loader file used as is.

import { compileStrings } from "@internationalized/string-compiler";

/**
 * @param {string} code
 */
export default code => {
    const json = JSON.parse(code);

    return compileStrings(json);
};
