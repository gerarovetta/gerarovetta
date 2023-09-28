# Alarm Excercise Pseudocode

```javascript
//global variables
errorCount = 0;
errorThreshold = 10;
startOfMinute = currentTimestamp(); // Date.now();

// Function to log errors and check for the error threshold.
function logError(error) {
    // Log the error to a text file. We assume the logic of appending the log is already implemented
    appendErrorToLogFile(error);
    
    // Check if a minute has passed since the last check.
    const now = Date.now();
    if (now - startOfMinute >= 60000) {
        // Reset the error count and update the timestamp.
        errorCount = 1;
        startOfMinute = now;
    } else {
        // Increment the error count.
        errorCount++;

        // Check if the error threshold is reached.
        if (errorCount > errorThreshold) {
            // Send an email notification.
            // sendEmail()

            // Reset the error count and update the timestamp.
            errorCount = 1;
            startOfMinute = now;
        }
    }
}
```

