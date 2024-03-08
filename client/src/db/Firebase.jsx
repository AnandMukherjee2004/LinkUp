import { light } from "@mui/material/styles/createPalette";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  limit,
  query,
  addDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes } from "firebase/storage";

import { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCNcUkPlYgYfx0QiNvpnGk8QzWxKZg1ZFo",
  authDomain: "linkup-7e8d9.firebaseapp.com",
  projectId: "linkup-7e8d9",
  storageBucket: "linkup-7e8d9.appspot.com",
  messagingSenderId: "260263470531",
  appId: "1:260263470531:web:4cb276d0bc9fce39374976",
  measurementId: "G-SKK4WG1T1C",
  databaseURL: "https://linkup-7e8d9-default-rtdb.firebaseio.com",
};

const provider = new GoogleAuthProvider();
export const FirebaseContext = createContext();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export const FireBaseProvider = (props) => {
  const [user, setUser] = useState(null);

  const [currentApplier, setCurrentApplier] = useState(null);

  const signUpUserWithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("created user: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const registerNewApplier = async (
    name,
    education,
    phoneNumber,
    resume,
    portfolio,
    skills,
    jobInterests,
    workExperience,
    about,
    gender
  ) => {
    const resumeRef = ref(
      storage,
      `uploads/resumes/${Date.now()}-${resume.name}`
    );
    const uploadedResumePath = await uploadBytes(resumeRef, resume);

    const docRef = doc(firestore, "Appliers", user.uid);

    try {
      const registeredApplier = await setDoc(docRef, {
        Full_Name: name,
        Email: user.email,
        Education: education,
        Phone_Number: phoneNumber,
        Resume: uploadedResumePath.ref.fullPath,
        Portfolio: portfolio,
        Skills: skills,
        Job_Interests: jobInterests,
        Work_Experience: workExperience,
        about: about,
        gender: gender,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    });
  };

  const signInWithGoogle = async () => {
    try {
      const person = await signInWithPopup(auth, provider);
      return person;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };

  const getAppliers = () => {
    return getDocs(collection(firestore, "Appliers"), limit(50));
  };

  // const getCurrentApplier = async () => {
  //   console.log("Getting current applier...");
  //   try {
  //     const applicants = await getAppliers();

  //     if (user) {
  //       console.log("Logged in User is ", user.uid);
  //       const applier = applicants.docs.find((applicant) => {
  //         return applicant.data().Email === user.email;
  //       });
  //       console.log("Current applier:", applier.data());
  //       return applier.data();
  //     } else {
  //       console.warn("No User Logged In");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching current applier: ", error.message);
  //     throw error;
  //   }
  // };

  const getCurrentApplierById = async (id) => {
    const docRef = doc(firestore, "Appliers", id);
    const applier = await getDoc(docRef);
    return applier.data();
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    const currentUser = firebase.auth().currentUser;

    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("The user is ", user);
      setUser(user);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        getAppliers,
        auth,
        ProtectedRoute,
        user,
        // currentApplier,
        getCurrentApplierById,
        registerNewApplier,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
