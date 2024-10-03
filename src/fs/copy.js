import { cp, existsSync } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToInitialFolder = path.join(__dirname, "files");
const destinationToCopiedFolder = path.join(__dirname, "files_copy");

const checkFolder = () => {
    if (!existsSync(destinationToInitialFolder)) {
        throw new Error("FS operation failed")
    }
}

const copy = async () => {
    checkFolder();
    cp(destinationToInitialFolder, destinationToCopiedFolder, { recursive: true }, (error) => {
        if (error) {
            throw error
        }
    });
};

await copy();
