import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
// import { FirebaseAdapter } from '@next-auth/firebase-adapter'
// import { db } from '../../../firebase'
// import * as firestoreFunctions from 'firebase/firestore'
// import { FirestoreAdapter } from '@next-auth/firebase-adapter'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
})
