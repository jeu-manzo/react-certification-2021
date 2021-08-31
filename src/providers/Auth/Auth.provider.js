import React, { useState, useContext, useEffect } from 'react';
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from '../../services/Firebase/firebase';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without a AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState(null);
  const [authLoading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function facebookLogin() {
    return auth.signInWithPopup(facebookAuthProvider);
  }

  function googleLogin() {
    return auth.signInWithPopup(googleAuthProvider);
  }

  function logout() {
    auth.signOut();
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
      setLoading(false);
    });

    return unsuscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authLoading,
        signup,
        login,
        logout,
        facebookLogin,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
