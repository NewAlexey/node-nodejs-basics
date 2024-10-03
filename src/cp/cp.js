import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = path.join(__dirname, "files", "script.js")

const spawnChildProcess = async (args) => {
    const child = spawn("node", [scriptPath, ...args], {
        stdio: [process.stdin, process.stdout, process.stderr, "ipc"],
    });
    
    child.on("error", (error) => {
        console.error(error);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
