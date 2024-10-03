import { Transform } from "stream"

const transform = async () => {
    const reverseTransformer = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, (`${chunk.toString().split("").reverse().join("")}\n\n`));
        },
    });
    
    process.stdin.pipe(reverseTransformer).pipe(process.stdout);
};

await transform();
