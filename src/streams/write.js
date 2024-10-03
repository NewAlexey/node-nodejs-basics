import { createWriteStream } from "fs";

const fileDestination = "src/streams/files/fileToWrite.txt";

const write = async () => {
    const stream = createWriteStream(fileDestination, "utf8");
    
    process.stdin.on("data", (data) => {
        stream.write(data.toString());
    });
    
    process.on("SIGINT", () => {
        stream.close();
        process.exit();
    });
};

await write();
