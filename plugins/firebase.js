import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: 'livebanner-77c6a.firebaseapp.com',
  projectId: 'livebanner-77c6a',
  storageBucket: 'livebanner-77c6a.appspot.com',
  messagingSenderId: '915903780304',
  appId: '1:915903780304:web:7281be701e6c60b857d5d5',
  measurementId: 'G-0S9KGXXRC6',
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
