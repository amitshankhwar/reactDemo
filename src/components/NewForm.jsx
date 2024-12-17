import React, { useState } from "react";

const NewForm = ({ val, setVal }) => {
  const [username, setusername] = useState("");
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");

  setVal("jsfdhj");

  function handlechange(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setusername(value);
    }
    if (name === "gmail") {
      setgmail(value);
    }
    if (name === "password") {
      setpassword(value);
    }
  }
  function handlesubmit(e) {
    e.preventDefault();
    let data = {
      username,
      gmail,
      password,
    };
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          onChange={(e) => handlechange(e)}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => handlechange(e)}
          name="gmail"
          type="email"
          placeholder="gmall"
        />
        <input
          onChange={(e) => handlechange(e)}
          name="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewForm;
