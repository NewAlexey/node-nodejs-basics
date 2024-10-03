import { existsSync, readFile } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToReadFile = path.join(__dirname, "files", "fileToRead.txt");

const checkFile = () => {
    if (!existsSync(destinationToReadFile)) {
        throw new Error("FS operation failed")
    }
}


const read = async () => {
    checkFile();
    await readFile(destinationToReadFile, "utf8", (error, data) => {
        if (error) {
            throw error;
        }
        
        console.log(data);
    });
};

await read();
