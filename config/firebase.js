// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyC-Ds1nSVuhWr_R9XrKKPCJOMIm-kCcRlk',
//   authDomain: 'talent-tree-ecf5a.firebaseapp.com',
//   projectId: 'talent-tree-ecf5a',
//   storageBucket: 'talent-tree-ecf5a.appspot.com',
//   messagingSenderId: '901411997218',
//   appId: '1:901411997218:web:6804db91f12cf7b996ac7b',
// }

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
export const firestore = firebase.firestore()

export default firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig)
