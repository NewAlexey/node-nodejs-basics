const parseEnv = () => {
    const rssPatternRegExp = new RegExp("^RSS_");
    const envDataObject = process.env;
    const entriesList = Object.entries(envDataObject);
    
    const result = [];
    
    entriesList.forEach((entry) => {
        if (rssPatternRegExp.test(entry[0])) {
            result.push(`${entry[0]}=${entry[1]}`);
        }
    });
    
    console.log(result.join("; "));
};

parseEnv();
