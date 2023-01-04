import firebase from 'firebase/app'
// import 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/storage'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// import 'firebase/analytics'
// import 'firebase/performance'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== 'undefined') {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ('measurementId' in firebaseConfig) {
        firebase.analytics()
        firebase.performance()
      }
    }
    console.log('Firebase app initialized')
  }
}

initFirebase()

const db = firebase.firestore()

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
// console.log('googleAuthProvider', googleAuthProvider)
// export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
// export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()
// export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
// export const firestore = firebase.firestore()

// export default firebase
