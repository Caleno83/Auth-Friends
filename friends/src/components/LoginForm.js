import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const LoginForm = (props) => {
  const formsState = {
    username: "",
    password: "",
  };

  const [state, setState] = useState(formsState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/api/login", state)
      .then((res) => {
        console.log("This is the response for login:", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FriendsList");
      })
      .catch((err) => {
        console.log("This is the Error for login:", err.message);
      });

    setState({
      username: "",
      password: "",
    });
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    console.log("Signing out now removing the token from LocalStorage");
  };

  return (
    <div>
      <h1>Welcome To Your Friends Page!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Log in</button>
        {isLoading ? <LoadingSpinner /> : null}
      </form>
      <div>
        <button onClick={removeToken}>Sign Out</button>
      </div>
    </div>
  );
};

export default LoginForm;
