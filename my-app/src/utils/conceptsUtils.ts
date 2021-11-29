import * as fs from 'fs';

const conceptDir = "./concepts";

export const numberOfFiles = fs.readdir(conceptDir, (err, files) => {
    return files.length;
});