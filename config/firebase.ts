import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = initializeAuth(app);

// Initialize Auth with AsyncStorage persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// const auth = initializeAuth(app, {
//   persistence: ReactNativeAsyncStoragePersistence,
// });

export { db, auth };
