// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDFmAF4Bx7PpSvccF_ebRe2kBWGqj11c",
  authDomain: "recipegenerator-918a7.firebaseapp.com",
  projectId: "recipegenerator-918a7",
  storageBucket: "recipegenerator-918a7.appspot.com",
  messagingSenderId: "743737873782",
  appId: "1:743737873782:web:8036f2ed1cae24f60d5657",
  measurementId: "G-Z9WK0Q0ML3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyBWDFmAF4Bx7PpSvccF_ebRe2kBWGqj11c",
//    authDomain: "recipegenerator-918a7.firebaseapp.com",
//    projectId: "recipegenerator-918a7",
//    storageBucket: "recipegenerator-918a7.appspot.com",
//    messagingSenderId: "743737873782",
//    appId: "1:743737873782:web:8036f2ed1cae24f60d5657",
//    measurementId: "G-Z9WK0Q0ML3"
//  };
//  firebase.initializeApp(firebaseConfig);
//  const database = firebase.database();

//  const MacroInput = () => {
//     const [selected, setSelected] = React.useState('');
//     const [number] = React.useState(null);
//     const [protein, setProtein] = React.useState('');
//     const [carbs, setCarbs] = React.useState('');
//     const [fat, setFat] = React.useState('');
//     const [exclude, setExclude] = React.useState('');
//     const [response, setResponse] = React.useState('');
//     const [prompt, setPrompt] = React.useState('');
//     const [loading, setLoading] = React.useState(false);

//  if (entryId) {
//    database.ref('Recipes/' + entryId).set({
//      ingredients,
//      instruction,
//      Nutrition,
//      title,
//    });
//  } else {
//    database.ref('journal').push({
//     ingredients,
//     instruction,
//     Nutrition,
//     title,
//    });
//  }





















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const recipes = collection.apply(db, 'recipe')
// const snapshot = await getDocs(recipes)
// const analytics = getAnalytics(app);


// export const getRecipes = async (db) => {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
// import firebase from 'firebase/compat/app';
// import { getDatabase } from 'firebase/database';
// import 'firebase/firestore';

// export const firebaseConfig = {
//     apiKey: "AIzaSyBWDFmAF4Bx7PpSvccF_ebRe2kBWGqj11c",
//     authDomain: "recipegenerator-918a7.firebaseapp.com",
//     projectId: "recipegenerator-918a7",
//     storageBucket: "recipegenerator-918a7.appspot.com",
//     messagingSenderId: "743737873782",
//     appId: "1:743737873782:web:8036f2ed1cae24f60d5657",
//     measurementId: "G-Z9WK0Q0ML3"
// };

// if(firebase.apps.length === 0){
//     firebase.initializeApp(firebaseConfig)
// }

// const db = getDatabase()
// export { db } 

// // Initiailise Firebase
// firebase.initializeApp(firebaseConfig)

// // Initialise 
// export const db = firebase.firestore();
// export const recipesCollection = db.collection("Recipes");

// export default function SavedRecipes() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Set up a listener to read data from the Firebase database
//     firebase.database().ref('path/to/data').on('value', (snapshot) => {
//       setData(snapshot.val());
//     });
//   }, []);

//   const handleSaveData = () => {
//     // Write data to the Firebase database
//     firebase.database().ref('path/to/data').set({
//       message: 'Hello, Firebase!'
//     });
//   };

//   return (
//     <View>
//       {data ? (
//         <Text>{data.message}</Text>
//       ) : (
//         <Text>No data available</Text>
//       )}
//       <Button title="Save data" onPress={handleSaveData} />
//     </View>
//   );
// }
