// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxgRsX1oUl8dl3q4LwefVmQFoiSf2ijQ4",
  authDomain: "netflex-clone-adaab.firebaseapp.com",
  projectId: "netflex-clone-adaab",
  storageBucket: "netflex-clone-adaab.firebasestorage.app",
  messagingSenderId: "258263056725",
  appId: "1:258263056725:web:9620911113dc47955a6fdc",
  measurementId: "G-LJSJB27RVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "users"), {

        uid: user.uid,
        name,
        authProvider: "local",
        email,

       });
    }
    catch(error) {
        console.error("Error signing up:", error);
        toast.error("Error signing in: " + error.code.split("/")[1].split('-').join(""))

    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error("Error signing up:", error);
        toast.error("Error signing in: " + error.code.split("/")[1].split('-').join(""))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, signup, login, logout };