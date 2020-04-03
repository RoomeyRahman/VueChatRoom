import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDj8M3ZyCyArED6gGZoManjO9Ilk7UgJTw',
  authDomain: 'myvuechatroom.firebaseapp.com',
  databaseURL: 'https://myvuechatroom.firebaseio.com',
  projectId: 'myvuechatroom',
  storageBucket: 'myvuechatroom.appspot.com',
  messagingSenderId: '1060232908582',
  appId: '1:1060232908582:web:cb80981ba30ece7d2f7be7',
  measurementId: 'G-7TDV4CFVP7'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
// const firebaseAnalytics = firebase.analytics()
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
