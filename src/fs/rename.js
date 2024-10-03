import { existsSync, rename as fsRename } from "fs";

const filesPath = "src/fs/files";

const fileName = "wrongFilename.txt";
const newFileName = "properFilename.md";

const pathOldFile = `${filesPath}/${fileName}`;
const pathNewFile = `${filesPath}/${newFileName}`;

const checkFiles = () => {
		if (!existsSync(pathOldFile)) {
				throw new Error("FS operation failed")
		}

		if (existsSync(pathNewFile)) {
				throw new Error("FS operation failed")
		}
}

const rename = async () => {
		checkFiles();
		fsRename(pathOldFile, pathNewFile, (error) => {
				if (error) {
						throw error;
				}
		})
};

await rename();
