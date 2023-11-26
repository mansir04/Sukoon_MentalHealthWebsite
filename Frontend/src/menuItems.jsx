import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./components/firebase-config";

const getMenuItems = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Resources',
      submenu: [
        {
          title: 'Articles',
          url: 'articles',
        },
        {
          title: 'Initiatives',
          url: 'initiatives',
        },
      ],
    },
    {
      title: 'Social',
      submenu: [
        {
          title: 'Groups',
          url: 'support-groups',
        },
        {
          title: 'Blogs',
          url: 'blogs',
        },
        {
          title: 'Quiz',
          url: 'quiz',
        },
        {
          title: 'Relax',
          url: 'relax',
        },
        {
          title: 'Memes',
          url: 'memes',
        },
      ],
    },
    {
      title: 'Contact',
      submenu: [
        {
          title: 'About Us',
          url: 'volunteer',
        },
        {
          title: 'Contact Us',
          url: 'contact',
        },
      ],
    },
  ];

  return menuItems;
};

export default getMenuItems;
