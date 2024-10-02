// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr1nrXZlu5zHz_OJ8NtlTDWbwvNvx3vfY",
  authDomain: "picguessr-74fb2.firebaseapp.com",
  projectId: "picguessr-74fb2",
  storageBucket: "picguessr-74fb2.appspot.com",
  messagingSenderId: "1019944570937",
  appId: "1:1019944570937:web:4b5d7463f7eedf0b6b3de8",
  measurementId: "G-6V41DLDZ7Y",
};

// Initialize Firebase
export const FirebaseContext = React.createContext(null);

export class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);;
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app)
    this.auth = getAuth(this.app)
  }

  async addData(collection, document) {
    try {
      const uuid = window.crypto.randomUUID();
      await setDoc(doc(this.db, collection, uuid), { id: uuid, ...document });
    } catch (e) {
      return null
    }
  }
  async uploadFile (imageString, name){
    try {
      const storageRef = ref(this.storage, name)
      const res = await uploadString(storageRef, imageString.replace( /^data:(.*);base64,/, '' ), 'base64')
      return res.metadata.fullPath
    } catch (error) {
      return null
    }
  }
  async createGsReference (key){
    try {
      const url = await getDownloadURL(ref(this.storage,key))

      if(url){
        return url
      }
      return ""
    } catch (error) {
      return ""
    }
  }
  async createUser(email, password){
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password)
      return user
    } catch (error) {
      return null
    }
  }
}
