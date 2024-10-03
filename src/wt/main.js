import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationWorkerFile = path.join(__dirname, "worker.js");

function getCpuCoresCount() {
    return cpus().length;
}

const performCalculations = async () => {
    const coreCounts = getCpuCoresCount();
    
    const resultList = [];
    
    for (let i = 0; i < coreCounts; i++) {
        const incrementalNumber = 10 + i;
        
        const worker = new Worker(destinationWorkerFile, { workerData: incrementalNumber });
        
        worker.on("message", (data) => {
            resultList[i] = { data, status: "resolved" };
            
            if (resultList.length === coreCounts) {
                console.log(resultList);
            }
        })
        
        worker.on("error", () => {
            resultList[i] = { data: null, status: "error" };
            
            if (resultList.length === coreCounts) {
                console.log(resultList);
            }
        })
    }
    
};

await performCalculations();
