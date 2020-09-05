import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriendsForm = () => {
  const friendInfo = {
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  };

  const [newFriend, setNewFriend] = useState(friendInfo);

  const handleChanges = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log("The response for newFriendFrom is:", res);
        setNewFriend(res.data);
      })
      .catch((err) => console.log("NewFriend data error:", err.message));
    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <>
      <h1>Please Add Your New Friend Info</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={handleChanges}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={handleChanges}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChanges}
        />
        <button type="submit">Add Friends Info</button>
      </form>
    </>
  );
};

export default NewFriendsForm;
