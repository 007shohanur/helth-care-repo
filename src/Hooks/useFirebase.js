import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged,   createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initaillizeAuthentication from "../Firebase/Firebase.initial";

initaillizeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  // email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // 
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  // google login section
  const googlelognin =() =>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };
  
  
  // onAuthStateChanged section
  useEffect(()=>{
    const Changed= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } 
      else {
        setUser({});
      }
      setLoading(false);
    });
    return () => Changed;
  },[]);
    // Logout section
  const logOut =()=>{
    setLoading(true);
      signOut(auth)
      .then(() =>{ })
      .finally(() => setLoading(false));
  }

  // Email and password
  const handleEmail = e =>{
    setEmail(e.target.value);
  }

  const handlePassword = e=>{
    setPassword(e.target.value);
  }

  const submitBtn = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('Password should be at least 6 characters');
      return;
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        setError(' ')
      })
      .catch(error =>{
        setError(error.message);
      })
      
  }

  return {
    user,
    loading,
    email,
    error,
    googlelognin,
    logOut,
    handleEmail,
    handlePassword,
    submitBtn,
  }
};

export default useFirebase;