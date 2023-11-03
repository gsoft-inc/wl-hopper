// taken from https://github.com/lukeed/clsx
// TODO: i know pat doesn't like having to many third parties and would prefer inlining the code. Is it true for a small
// package like this also?
// Disabling eslint since it's a third party package
/* eslint-disable */
export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

function toVal(mix: ClassValue) {
    let k: ClassValue, y: ClassValue, str = "";

    if (typeof mix === "string" || typeof mix === "number") {
        str += mix;
    } else if (typeof mix === "object") {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if (y = toVal(mix[k])) {
                        str && (str += " ");
                        str += y;
                    }
                }
            }
        } else {
            for (k in mix) {
                if (mix![k]) {
                    str && (str += " ");
                    str += k;
                }
            }
        }
    }

    return str;
}

export function clsx(...inputs: ClassValue[]): string {
    let i = 0, tmp: ClassValue, x: ClassValue, str = "";
    while (i < inputs.length) {
        if (tmp = inputs[i++]) {
            if (x = toVal(tmp)) {
                str && (str += " ");
                str += x;
            }
        }
    }

    return str;
}

export default clsx;
/* eslint-enabled */
