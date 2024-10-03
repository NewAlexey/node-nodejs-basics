import { gzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const fileDestination = "src/zip/files/fileToCompress.txt";
const gzipFileDestination = "src/zip/files/archive.gz";

const compress = async () => {
    const readStream = createReadStream(fileDestination, "utf8");
    const writeStream = createWriteStream(gzipFileDestination);
    
    readStream.on("data", (data) => {
        gzip(data, (error, gzipData) => {
            writeStream.write(gzipData);
        })
    })
}

await compress();
