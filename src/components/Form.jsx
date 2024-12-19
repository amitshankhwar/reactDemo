import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  //   function handleName(e) {
  //     console.log(e.target.value);
  //     setUser(...user, [e.target.value]);
  //   }

  //   function handleEmail() {
  //     setUser(...user, [e.target.value]);
  //   }

  //   function handlePassword() {
  //     setUser(...user, [e.target.value]);
  //   }

  //useeffect -> to tackle sideeffects(background) of a componenets

  //   useEffect(()=>{
  //     //api calling
  //   },[])
  //first argument m callback, second arument m dependency array

  function handleInput(e) {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(user);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <>
      <form action="" className="form">
        <input
          name="username"
          type="text"
          className="name"
          placeholder="enter your name"
          onChange={(e) => handleInput(e)}
        />
        <input
          name="email"
          type="email"
          className="email"
          placeholder="enter your email"
          onChange={(e) => handleInput(e)}
        />
        <input
          name="password"
          type="password"
          className="password"
          placeholder="enter your password"
          onChange={(e) => handleInput(e)}
        />
        <input
          name="cpassword"
          type="password"
          className="password"
          placeholder="enter your confirm password"
          onChange={(e) => handleInput(e)}
        />

        <button onClick={(e) => handleClick(e)} type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
