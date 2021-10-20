import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged,   createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initaillizeAuthentication from "../Firebase/Firebase.initial";

initaillizeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  // google login //
  const googlelognin =() =>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };
  
  
  // onAuthStateChanged section//
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
    // Logout section//
  const logOut =()=>{
    setLoading(true);
      signOut(auth)
      .then(() =>{ })
      .finally(() => setLoading(false));
  }

  const registerUser = (email, password, name) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, name)
        .finally(() => setLoading(false));
}
 
  

  return {
    user,
    loading,
    googlelognin,
    logOut,
    registerUser
    
  }
};

export default useFirebase;