import { installMethods } from "@/content/components/data";

/* `compileMDX` accepts a scope prop, which makes all of the values available for use in your MDX.
 *  Each key/value pair in the scope argument will be exposed as a javascript variable.
 *  So, for example, you could imagine if you had a scope like { foo: 'bar' }, it would be interpreted as const foo = 'bar'.
 */
export const data = { installMethods };
