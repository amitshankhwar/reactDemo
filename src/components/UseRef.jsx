import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const ButtonRef = useRef(null);

  console.log("render");

  function handleClick() {
    inputRef.current.focus();
    ButtonRef.current.style.color = "red";
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter your name" />
      <button ref={ButtonRef} onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default UseRef;
