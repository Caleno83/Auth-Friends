import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friends from "../components/Friends";

const FriendsList = () => {
  const [state, setState] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log("The response for FriendList is:", res.data);
        setState(res.data);
      })
      .catch((err) =>
        console.error("The Error for FriendList is", err.message)
      );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>My Friends List Information!!!</h1>

        {state.map((friend) => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </>
  );
};

export default FriendsList;
