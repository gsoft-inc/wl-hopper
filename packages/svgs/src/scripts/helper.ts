import fs from "fs";
import path from "path";

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
    const files = fs.readdirSync(dirPath);

    let returnObject: string[] = [...arrayOfFiles];

    files.forEach(file => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            returnObject = getAllFiles(path.join(dirPath, file), returnObject);
        } else {
            returnObject.push(path.join(dirPath, file));
        }
    });

    return returnObject;
};

const checkFolderExists = (dir: string): void => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
};

const removeDuplicates = (data: string[]): string[] => {
    return [...new Set(data)];
};

export { getAllFiles, checkFolderExists, removeDuplicates };