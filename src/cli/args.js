const parseArgs = () => {
    const keyPatternRegExp = new RegExp("^--");
    const argvList = process.argv;
    
    const result = [];
    
    for (let i = 0; i < argvList.length; i++) {
        if (keyPatternRegExp.test(argvList[i])) {
            result.push(`${argvList[i].replaceAll("--", "")} is ${argvList[i + 1]}`)
            i += 1;
        }
    }
    
    console.log(result.join(", "));
};

parseArgs();
