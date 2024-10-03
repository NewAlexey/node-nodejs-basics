import { existsSync, rm } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToDeletedFile = path.join(__dirname, "files", "fileToRemove.txt");

const checkFile = () => {
    if (!existsSync(destinationToDeletedFile)) {
        throw new Error("FS operation failed")
    }
}

const remove = async () => {
    checkFile();
    rm(destinationToDeletedFile, (err) => {
        if (err) {
            throw err;
        }
    });
};

await remove();
