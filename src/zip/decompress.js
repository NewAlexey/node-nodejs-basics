import { unzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToCompressFile = path.join(__dirname, "files", "fileToCompress2.txt");
const destinationToZipFile = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
    const fileReadStream = createReadStream(destinationToZipFile);
    const archivedFileWriteStream = createWriteStream(destinationToCompressFile);
    
    fileReadStream.on("data", (data) => {
        unzip(data, (error, buffer) => archivedFileWriteStream.write(buffer))
    });
};

await decompress();
