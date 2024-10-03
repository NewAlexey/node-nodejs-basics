import { createReadStream } from "fs";
import { createHash } from "crypto";

const fileDestination = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
    const hash = createHash("sha256");
    const stream = createReadStream(fileDestination);
    stream.on("error", (error) => {
        throw error;
    });
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
