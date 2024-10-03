import { createReadStream } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationToHashFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hash = createHash("sha256");
    const stream = createReadStream(destinationToHashFile);
    stream.on("error", (error) => {
        throw error;
    });
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
