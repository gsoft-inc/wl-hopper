const formattingTitleId = (input: string) => {
    // Remove non-alphanumeric characters and replace spaces with hyphens
    const sanitizedInput = input.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");

    // Convert the sanitized input to lowercase
    return sanitizedInput.toLowerCase();
};

export default formattingTitleId;
