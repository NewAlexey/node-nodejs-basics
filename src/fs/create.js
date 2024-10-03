import { writeFile, existsSync } from "fs";

const fileName = "fresh.txt";
const filePath = `src/fs/files/${fileName}`;
const fileContent = "I am fresh and young";

const checkFile = () => {
    if (existsSync(filePath)) {
        throw new Error("FS operation failed")
    }
}

const create = async () => {
    checkFile();
    await writeFile(filePath, fileContent, "utf8", (err) => {
        if (err) {
            throw err;
        }
    });
}


await create();
