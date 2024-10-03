const parseArgs = () => {
    const keyPatternRegExp = new RegExp("^--");
    const argvList = process.argv;
    
    for (let i = 0; i < argvList.length; i++) {
        if (keyPatternRegExp.test(argvList[i])) {
            console.log(`${argvList[i]} is ${argvList[i + 1]}`);
            i += 1;
        }
    }
};

parseArgs();
