import { existsSync, readdir } from "fs";

const folderPath = "src/fs/files";

const checkFolder = () => {
    if (!existsSync(folderPath)) {
        throw new Error("FS operation failed")
    }
}

const list = async () => {
    checkFolder();
    await readdir(folderPath, (error, files) => {
        if (error) {
            throw error;
        }
        
        console.log(files);
    });
};

await list();
