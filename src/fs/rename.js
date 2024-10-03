import { existsSync, rename as fsRename } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToOldFile = path.join(__dirname, "files", "wrongFilename.txt");
const destinationToNewFile = path.join(__dirname, "files", "properFilename.md");

const checkFiles = () => {
    if (!existsSync(destinationToOldFile)) {
        throw new Error("FS operation failed")
    }
    
    if (existsSync(destinationToNewFile)) {
        throw new Error("FS operation failed")
    }
}

const rename = async () => {
    checkFiles();
    fsRename(destinationToOldFile, destinationToNewFile, (error) => {
        if (error) {
            throw error;
        }
    })
};

await rename();
