import { gzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToCompressFile = path.join(__dirname, "files", "fileToCompress.txt");
const destinationToZipFile = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
    const readStream = createReadStream(destinationToCompressFile, "utf8");
    const writeStream = createWriteStream(destinationToZipFile);
    
    readStream.on("data", (data) => {
        gzip(data, (error, gzipData) => {
            writeStream.write(gzipData);
        })
    })
}

await compress();
