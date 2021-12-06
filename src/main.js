import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBeOuqrwzSx8oN56IO3Y5f6Y4V-ZFWZbM",
  authDomain: "rushed-co.firebaseapp.com",
  databaseURL:
    "https://rushed-co-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rushed-co",
  storageBucket: "rushed-co.appspot.com",
  messagingSenderId: "212283818408",
  appId: "1:212283818408:web:78aa0736b8f2dcfbd61d9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
