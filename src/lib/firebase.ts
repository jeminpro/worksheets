import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let configured: boolean | undefined;

function readConfig(): FirebaseWebConfig | null {
  const apiKey = import.meta.env.PUBLIC_FIREBASE_API_KEY;
  const authDomain = import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = import.meta.env.PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = import.meta.env.PUBLIC_FIREBASE_APP_ID;

  if (
    !apiKey ||
    !authDomain ||
    !projectId ||
    !storageBucket ||
    !messagingSenderId ||
    !appId
  ) {
    return null;
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };
}

function ensureApp(): FirebaseApp | undefined {
  if (app) return app;
  const config = readConfig();
  if (!config) return undefined;
  app = initializeApp(config);
  return app;
}

export function isFirebaseConfigured(): boolean {
  if (configured !== undefined) return configured;
  configured = readConfig() !== null;
  return configured;
}

export function getFirebaseAuth(): Auth | undefined {
  const firebaseApp = ensureApp();
  if (!firebaseApp) return undefined;
  auth ??= getAuth(firebaseApp);
  return auth;
}

export function getFirestoreDb(): Firestore | undefined {
  const firebaseApp = ensureApp();
  if (!firebaseApp) return undefined;
  db ??= getFirestore(firebaseApp);
  return db;
}
