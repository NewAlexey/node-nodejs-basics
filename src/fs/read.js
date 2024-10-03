import { existsSync, readFile } from "fs";

const fileName = "fileToRead.txt";
const filePath = "src/fs/files";
const fileDestination = `${filePath}/${fileName}`;

const checkFile = () => {
    if (!existsSync(fileDestination)) {
        throw new Error("FS operation failed")
    }
}


const read = async () => {
    checkFile();
    await readFile(fileDestination, "utf8", (error, data) => {
        if (error) {
            throw error;
        }
        
        console.log(data);
    });
};

await read();
