declare module "*.json" {
    interface Token {
        name: string;
        value: string;
    }

    const tokens: Token[];

    export default tokens;
}
