/**
* 
* @param {string} input - A string that describes the format of a URL
* @param {string} input - A URL instance that matches the format specified in urlFormatString
* @returns {} 
*/
function urlParser(urlFormatString, urlInstance) {
    // Parse the URL format string to extract variable names.
    const variableNames = [];
    const formatParts = urlFormatString.split('/');
    const urlParts = urlInstance.split('?')[0].split('/'); // we do not need the query string here
    const variableMap = {}; // return object
    
    for (let i = 0; i < formatParts.length; i++) {
        const formatPart = formatParts[i];
        const urlPart = urlParts[i];
    
        if (formatPart.startsWith(':')) {
          // This is a variable so we extract the variable name 
          // from the format and value from url instance.
          const variableName = formatPart.slice(1);
          variableMap[variableName] = urlPart;
        }
      }
     // Now we can parse query parameters from the url instance and make use of URLSearchParams
    const queryString= urlInstance.split('?')[1]; // obtain query information
    if (queryString) { 
        const queryParams = new URLSearchParams(queryString);
        queryParams.forEach((value, key) => {
        variableMap[key] = value;
        });
    }
    console.log(variableMap);
    return variableMap;
}

export default urlParser;
