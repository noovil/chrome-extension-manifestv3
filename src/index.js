import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
  });

const db = getFirestore();
//replace with your db collection name
const colRef = collection(db, dbname)

async function add_data() {
  //add data to firestore
}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click",()=>{
  add_data();
})


