import fs from 'fs';
import path from 'path';

export default function getInnerFilesName(folderPath: string) {
    const filesName = fs.readdirSync(folderPath);
    console.log(filesName);

    return filesName;
}