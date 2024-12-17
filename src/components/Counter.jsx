import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  //   console.log(state[1]);

  console.log("vhjsdg");

  //   let count = 0;

  function Increment(e) {
    if (e.target.id === "plus") {
      setCount(count + 1);
    } else if (e.target.id === "minus") {
      setCount(count - 1);
    } else {
      setCount((count = 0));
    }
  }

  //   function Decrement() {
  //     setCount(count - 1);
  //     console.log(count);
  //   }

  return (
    <div>
      <div className="counter">
        <button id="plus" className="plus" onClick={(e) => Increment(e)}>
          +
        </button>
        <span className="value">{count}</span>
        <button className="minus" id="minus" onClick={(e) => Increment(e)}>
          -
        </button>

        <button className="reset" id="reset" onClick={(e) => Increment(e)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;


//props -> 