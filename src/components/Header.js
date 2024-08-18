import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Header component is subscribed to the store
  const user = useSelector((store) => store.user);

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign In / Sign Up
        const { uid, email, photoURL } = user;
        dispatch(addUser({ uid, email, photoURL }));
        navigate("/browse");
      } else {
        // Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between absolute z-20 w-full bg-gradient-to-b from-black">
      <img
        src="netflix_logo.png"
        alt="netflix-logo"
        className={user ? "w-32 mx-8" : "w-48 mx-32"}
      />

      <div className="flex">
        {user?.email && <p className="text-white mt-3">{user.email}</p>}

        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="photo-url"
            className="rounded-full w-16 mt-2"
          />
        )}

        {user && (
          <button
            className="bg-red-600 text-white m-3 p-2 rounded-lg"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
