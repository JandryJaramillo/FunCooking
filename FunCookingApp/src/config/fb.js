import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import Constants from "expo-constants";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth(app)

const google = new firebaseConfig.auth.GoogleAuthProvider()

export { auth, google }