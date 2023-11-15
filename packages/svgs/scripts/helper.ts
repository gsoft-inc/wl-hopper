import fs from "fs";
import path from "path";

export const getFiles = (dir: string) => {
    return new Promise<string[]>((resolve, reject) => {
        if (fs.existsSync(dir)) {
            resolve(getAllFiles(dir));
        } else {
            reject(`no such directory ${dir}`);
        }
    });
};

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
    const files = fs.readdirSync(dirPath);

    let returnObject = [...arrayOfFiles];

    files.forEach(file => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            returnObject = getAllFiles(path.join(dirPath, file), returnObject);
        } else {
            returnObject.push(path.join(dirPath, file));
        }
    });

    return returnObject;
};

export const checkFolderExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
};
