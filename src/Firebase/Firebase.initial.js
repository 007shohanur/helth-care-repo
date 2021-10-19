import {initializeApp} from 'firebase/app';
import firebaseConfig from './Firebase.config';

const initaillizeAuthentication = () => {
    initializeApp(firebaseConfig);
};


export default initaillizeAuthentication;