import { existsSync, rm } from "fs";

const fileName = "fileToRemove.txt";
const filePath = `src/fs/files/${fileName}`;

const checkFile = () => {
    if (!existsSync(filePath)) {
        throw new Error("FS operation failed")
    }
}

const remove = async () => {
    checkFile();
    rm(filePath, (err) => {
        if (err) {
            throw err;
        }
    });
};

await remove();
