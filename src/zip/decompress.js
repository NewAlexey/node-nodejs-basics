import { unzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const fileDestination = "src/zip/files/fileToCompress.txt";
const gzipFileDestination = "src/zip/files/archive.gz";

const decompress = async () => {
    const fileReadStream = createReadStream(gzipFileDestination);
    const archivedFileWriteStream = createWriteStream(fileDestination);
    
    fileReadStream.on("data", (data) => {
        unzip(data, (error, buffer) => archivedFileWriteStream.write(buffer))
    });
};

await decompress();
