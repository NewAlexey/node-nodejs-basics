import { writeFile, existsSync } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToCreatedFile = path.join(__dirname, "files", "fresh.txt");

const fileContent = "I am fresh and young";

const checkFile = () => {
    if (existsSync(destinationToCreatedFile)) {
        throw new Error("FS operation failed")
    }
}

const create = async () => {
    checkFile();
    await writeFile(destinationToCreatedFile, fileContent, "utf8", (err) => {
        if (err) {
            throw err;
        }
    });
}


await create();
