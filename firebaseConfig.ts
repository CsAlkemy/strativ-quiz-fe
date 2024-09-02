import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCG8TCMUncs016YOulpVIAeyazDSKxBjUI',
    authDomain: 'fashionhub-53814.firebaseapp.com',
    projectId: 'fashionhub-53814',
    storageBucket: 'fashionhub-53814.appspot.com',
    messagingSenderId: '248360639764',
    appId: '1:248360639764:web:7290c8d5a22bb34961f601',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
