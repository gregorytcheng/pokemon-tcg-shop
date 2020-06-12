import React, { useState, useEffect } from "react";
import { firestore } from "../utils/FirebaseUtils";
import { Feed } from "semantic-ui-react";
import PropTypes from "prop-types";
import SendPostForm from "./SendPostForm";
import moment from "moment";

const PostFeed = ({ cardId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var unsubscribe = firestore
      .collection("cards")
      .doc(cardId)
      .collection("posts")
      .orderBy("createdAt", "desc")
      .limit(4)
      .onSnapshot((posts) => {
        var postData = [];
        posts.forEach((post) => {
          postData = [...postData, { ...post.data(), id: post.id }];
        });
        setPosts(postData);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Feed>
        {posts.map((post) => (
          <Feed.Event key={post.id}>
            <Feed.Label image={post.photoURL} />
            <Feed.Content>
              <Feed.Date>
                {moment.unix(post.createdAt.seconds).fromNow()}
              </Feed.Date>
              <Feed.Summary>{post.username}</Feed.Summary>
              <Feed.Extra>{post.content}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        ))}
      </Feed>
      <SendPostForm cardId={cardId} />
    </>
  );
};

PostFeed.propTypes = {
  cardId: PropTypes.string,
};

export default PostFeed;
