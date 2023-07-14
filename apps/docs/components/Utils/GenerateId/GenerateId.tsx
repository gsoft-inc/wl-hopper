export const generateId = (input: string) => {
    // Remove non-alphanumeric characters and replace spaces with hyphens
    const sanitizedInput = input.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");

    // Convert the sanitized input to lowercase
    const lowercaseInput = sanitizedInput.toLowerCase();

    return lowercaseInput;
};
