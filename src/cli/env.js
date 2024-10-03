const parseEnv = () => {
    const rssPatternRegExp = new RegExp("^RSS_");
    const envDataObject = process.env;
    const entriesList = Object.entries(envDataObject);
    const filteredEntriesList = entriesList.filter((entry) => rssPatternRegExp.test(entry[0]));
    
    filteredEntriesList.forEach(([key, value]) => console.log(`${key}=${value}`))
};

parseEnv();
