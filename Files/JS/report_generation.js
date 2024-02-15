import * as JsonImport from "../Business-Partners.json";

// Uses a promise to import the json file and then access its data using dot notation
JsonImport.then(JSON_Data => {
    // Access the imported data using dot notation
    console.log(JSON_Data)
}).catch(error => {
    throw new Error('Error importing business partner data. Please try again later.');
    // Do not console log the error as it may reveal potentially sensitive info
});
