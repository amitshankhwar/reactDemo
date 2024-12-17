import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios from "axios";

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getData(url) {
      try {
        // const res = await fetch(url);
        // const resData = await res.json(); //axios -> https
        const resData = await axios.get(url);
        setData(resData.data);
        console.log(resData);
      } catch (error) {
        console.log(error);
      }
    }

    getData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  function handleClick() {
    setCount(count + 6);
  }

  return (
    <div>
      <ul>
        {data.map((item, idx) => {
          return <ListItem key={idx} item={item} idx={idx} />;
        })}
      </ul>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default DataFetch;
