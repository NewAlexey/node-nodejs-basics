import { createReadStream } from "fs";

const fileDestination = "src/streams/files/fileToRead.txt";

const read = async () => {
    const stream = createReadStream(fileDestination, "utf8");
    stream.on("data", (chunk) => process.stdout.write(`${chunk}\n`))
};

await read();
