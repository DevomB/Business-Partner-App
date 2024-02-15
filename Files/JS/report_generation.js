import * as JsonImport from "../Business-Partners.json";

// Uses a promise to import the json file and then access its data using dot notation
JsonImport.then(JSON_Data => {
    // Access the imported data using dot notation
    const partners = JSON_Data.partners
}).catch(error => {
    // Handle errors that may occur during the import
    console.error('Error importing JSON:', error);
});
