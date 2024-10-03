import { cp, existsSync } from "fs";

const copiedFolderPath = "src/fs/files";
const copiedFolderDestination = "src/fs/files_copy";

const checkFolder = () => {
		if (!existsSync(copiedFolderPath)) {
				throw new Error("FS operation failed")
		}
}

const copy = async () => {
		checkFolder();
		cp(copiedFolderPath, copiedFolderDestination, { recursive: true }, (error) => {
				if (error) {
						throw error
				}
		});
};

await copy();
