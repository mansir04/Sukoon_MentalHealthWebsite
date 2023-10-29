import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../components/firebase-config";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

function Blogs({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  // Define an array of background colors in hex format
  const backgroundColors = [
    "#e8dff5", // Hex code
    "#fce1e4", // Hex code
    "#fcf4dd", // Hex code
    "#ddedea", // Hex code
    "#daeaf6", // Hex code
    // "#DFEBEB", // Hex code
    // Add more hex color codes as needed
  ];

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()); // Reverse the order of posts
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="blogsPage">
      {postLists.map((post, index) => {
        // Assign background color from the array based on the index
        const backgroundColor = backgroundColors[index % backgroundColors.length];

        return (
          <div className="post" key={post.id} style={{ backgroundColor }}>
            <div className="postHeader">
              <div className="title">
                <h2>{post.title}</h2>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3 className="postAuthor">@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
