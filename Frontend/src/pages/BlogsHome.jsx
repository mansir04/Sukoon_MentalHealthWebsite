import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../components/firebase-config";

function Blogs({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const backgroundColors = [
    "#fcf4dd", 
    "#ddedea",
    "#e8dff5", 
    "#fce1e4", 
    "#daeaf6", 
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
