import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAo6aKmJPe42gA9UW58ioeaImBRtlnOLKU',
  authDomain: 'clone-4b2fd.firebaseapp.com',
  projectId: 'clone-4b2fd',
  storageBucket: 'clone-4b2fd.appspot.com',
  messagingSenderId: '68424033912',
  appId: '1:68424033912:web:c066c5f8a383b17da4ef8d',
  measurementId: 'G-FTN3SXERWS',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
