import React, { useState, useContext } from "react";
import { firestore } from "../utils/FirebaseUtils";
import { TextArea, Button, List } from "semantic-ui-react";
import UserContext from "../contexts/UserContext";

const SendPostForm = ({ cardId }) => {
  const [postContent, setPostContent] = useState("");
  const user = useContext(UserContext);

  const handlePostContent = (e, { value }) => {
    setPostContent(value);
  };

  const sendPostForm = () => {
    if (user === null) {
      alert("Please sign in to leave a review.");
      return;
    }
    if (postContent === "") {
      return;
    }
    setPostContent("");
    firestore.collection("cards").doc(cardId).collection("posts").add({
      content: postContent,
      username: user.displayName,
      createdAt: new Date(),
      photoURL: user.photoURL,
    });
  };

  return (
    <List>
      <List.Item>
        <TextArea
          style={{ minHeight: 100 }}
          value={postContent}
          onChange={handlePostContent}
        />
      </List.Item>
      <List.Item>
        <Button primary onClick={() => sendPostForm()}>
          Send
        </Button>
      </List.Item>
    </List>
  );
};

export default SendPostForm;
