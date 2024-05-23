import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// COMIENZA FireBase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVfqN2ds9dccZZh7AjmDrgyEUpan7Y44w",
  authDomain: "programacionweb-8595a.firebaseapp.com",
  projectId: "programacionweb-8595a",
  storageBucket: "programacionweb-8595a.appspot.com",
  messagingSenderId: "707625682561",
  appId: "1:707625682561:web:791acdacb91da37bbb2f80"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//TERMINA Firebase


const app = createApp(App)

app.use(router);

app.mount('#app')
