// Importa las funciones que necesitas de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5xlDxcOZeIOFfhIfl-ek0NgiSFCO-0DY",
  authDomain: "webb-ba329.firebaseapp.com",
  projectId: "webb-ba329",
  storageBucket: "webb-ba329.appspot.com",
  messagingSenderId: "939070896272",
  appId: "1:939070896272:web:b6fed70a6765b40cf0c015",
  measurementId: "G-EBXYEENV9V"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Cloud Firestore y obtén una referencia al servicio
const db = getFirestore(app);

export { db };
