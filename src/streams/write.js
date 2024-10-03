import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToWriteFile = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const stream = createWriteStream(destinationToWriteFile, "utf8");
    
    process.stdin.on("data", (data) => {
        stream.write(data.toString());
    });
    
    process.on("SIGINT", () => {
        stream.close();
        process.exit();
    });
};

await write();
