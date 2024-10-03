import { Worker } from "worker_threads";
import { cpus } from "os";

function getCpuCoresCount() {
    return cpus().length;
}

const performCalculations = async () => {
    const coreCounts = getCpuCoresCount();
    
    const resultList = [];
    
    for (let i = 0; i < coreCounts; i++) {
        const incrementalNumber = 35 + i;
        
        const worker = new Worker("./src/wt/worker.js", { workerData: incrementalNumber });
        
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
