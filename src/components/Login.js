import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [validMessage, setValidMessage] = useState("");

  const togglebtn = () => {
    setIsSignin(!isSignin);
  };

  const handleSigninSignup = () => {
    const message = validate(email.current.value, password.current.value);
    setValidMessage(message);

    if (validMessage) return;

    // Authenticate
    if (isSignin) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // alert("Sign In Successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          alert(errorCode + " - " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          alert("Sign Up Successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          alert(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log(user);
        // console.log(user.displayName);
        // console.log(credential);
        // console.log(token);
        // alert("Google Sign In Successfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode + " - " + errorMessage);
        console.log(email + " - " + credential);
      });
  };

  return (
    <div>
      <img
        src="netflix_background.jpg"
        alt="netflix-background"
        className="brightness-50 absolute"
      />

      <form
        className="bg-black bg-opacity-70 absolute w-4/12 mx-96 my-32 p-14 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl text-white font-bold mb-7">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignin && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-3 mb-4 rounded-lg w-full bg-black text-white border border-white"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Enter Email"
          className="p-3 mb-4 rounded-lg w-full bg-black text-white border border-white"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-3 mb-4 rounded-lg w-full bg-black text-white border border-white"
        />
        <button
          onClick={handleSigninSignup}
          className="bg-red-700 text-white text-center w-full p-3 mb-4 rounded-lg hover:bg-opacity-90"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        {validMessage && (
          <p className="bg-red-700 text-white p-3 mb-4" onClick={togglebtn}>
            {validMessage}
          </p>
        )}

        {isSignin && (
          <button
            // className="mx-4 my-2 w-96 p-4 border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            className="mb-2 p-3 w-full flex justify-center gap-2 bg-white text-black rounded-lg hover:bg-opacity-90"
            onClick={handleGoogleSignIn}
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google logo"
            />
            <span>Sign In with Google</span>
          </button>
        )}

        <p className="text-white cursor-pointer" onClick={togglebtn}>
          {isSignin
            ? "New to Netflix-GPT ? Sign Up now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
