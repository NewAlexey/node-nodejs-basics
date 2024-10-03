import { existsSync, readdir } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToReadFolder = path.join(__dirname, "files");

const checkFolder = () => {
    if (!existsSync(destinationToReadFolder)) {
        throw new Error("FS operation failed")
    }
}

const list = async () => {
    checkFolder();
    await readdir(destinationToReadFolder, (error, files) => {
        if (error) {
            throw error;
        }
        
        console.log(files);
    });
};

await list();
