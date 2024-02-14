// Importing all things that are used
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // To sign up

// Importing the FirebaseConfig from Firebase.config.js
import { firebaseConfig } from './Firebase.config.js'; 
/* 
This Firebase.config.js is gitignored.
You must create another file in this folder 
You must put the snippet of code in a file named "Firebase.config.js" w/o the initialization or import
Then just follow the instructions within
*/
import { API_Link } from './Abstract_Email_Verif.config.js'

const database = getDatabase();
const auth = getAuth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



var attemptCount = 3;

function validateLogin(){
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (_){
        
    } else {
    
    }
}

function validateSignup(){
    const email = document.getElementById("username").value;
    let full_Email_Check = API_Link + email



    /*  
    Use the abstract email API to check the validity of the email and then   
    Ask for a password/Name
    Once passes all checks add to firebase DB and then send them to the login screen
    */
}

function forgotPasswordReset(){
    /*  
    Ask for email then copy code form the login to check for the email being real.
    PHP file with a code generated then need the code sent to email checked
    Then display output
    Then ask the password new
    */
}


/* DO NOT CREATE CODE FOR ANYTHING UNDER THIS LINE */
// USE ABSTRACT EMAIL API to validate emails