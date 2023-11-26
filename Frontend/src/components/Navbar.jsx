import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../components/firebase-config";
import MenuItems from "./MenuItems";
import getMenuItems from "../menuItems";
import "../App.css";

const Navbar = () => {

  const menuItems = getMenuItems();

  const [isAuth, setIsAuth] = useState(false); 

  const handleLogOutClick = () => {
    
    signOut(auth).then(() => {
      setIsAuth(false); // Update the authentication state to false
      localStorage.clear();
      window.location.pathname = "/";
    });
  };

  useEffect(() => {
    // Set up Firebase authentication observer to listen for changes in the user's login status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setIsAuth(true); // Update the authentication state to true
      } else {
        // User is signed out.
        setIsAuth(false); // Update the authentication state to false
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <div className="menu-items">
        {!isAuth ? (
          <a href="/login">Login</a>
        ) : (
          <div className="auth-links">
            <a href="/createpost">CreatePost</a>
            <button className="LogOut-Button" onClick={handleLogOutClick}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
