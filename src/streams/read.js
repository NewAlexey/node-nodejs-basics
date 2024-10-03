import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToReadFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const stream = createReadStream(destinationToReadFile, "utf8");
    stream.on("data", (chunk) => process.stdout.write(`${chunk}\n`))
};

await read();
