import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwpAwXhowE5OjeccwVWeIK_Bx81qk4m5I",
  authDomain: "portfolio-b8200.firebaseapp.com",
  projectId: "portfolio-b8200",
  storageBucket: "portfolio-b8200.appspot.com",
  messagingSenderId: "746529779961",
  appId: "1:746529779961:web:b484df613966beb5a9b228",
};

firebase.initializeApp(firebaseConfig);

console.log(firebase);
