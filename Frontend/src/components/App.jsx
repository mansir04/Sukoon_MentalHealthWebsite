import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Blogs from "../pages/BlogsHome";
import Layout from "./Layout";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import Anxiety from "../pages/Anxiety";
import Depression from "../pages/Depression";
import Ocd from "../pages/Ocd";
import PanicDisorder from "../pages/PanicDisorder";
import BipolarArticle from "../pages/BipolarArticle";
import Schizophrenia from "../pages/Schizophrenia";
import Ptsd from "../pages/Ptsd";
import Psychosis from "../pages/Psychosis";
import Initiatives from "../pages/Initiatives";
import Quiz from "../pages/Quiz";
import Relax from "../pages/Relax";

import Memes from "../pages/Memes";
import Volunteer from "../pages/Volunteer";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/SignUp";
import AnxietyQuiz from "../pages/AnxietyQuiz";
import DepressionQuiz from "../pages/DepressionQuiz";
import OCDQuiz from "../pages/OcdQuiz";
import ADHDQuiz from "../pages/ADHDQuiz";
import SupportGroupsMain from "../pages/SupportGroupsMain";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="depression" element={<Depression />} />
          <Route path="ocd" element={<Ocd />} />
          <Route path="panicdisorder" element={<PanicDisorder />} />
          <Route path="bipolar-article" element={<BipolarArticle />} />
          <Route path="schizophrenia" element={<Schizophrenia />} />
          <Route path="ptsd" element={<Ptsd />} />
          <Route path="psychosis" element={<Psychosis />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="support-groups" element={<SupportGroupsMain />} />
          <Route path="blogs" element={<Blogs isAuth={isAuth} />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="anxiety-quiz" element={<AnxietyQuiz />} />
          <Route path="depression-quiz" element={<DepressionQuiz />} />
          <Route path="ocd-quiz" element={<OCDQuiz />} />
          <Route path="adhd-quiz" element={<ADHDQuiz />} />
          <Route path="relax" element={<Relax />} />
          <Route path="memes" element={<Memes />} />
         
<Route path="volunteer" element={<Volunteer />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
