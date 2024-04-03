const camelCase = (str: string) => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

export default camelCase;
