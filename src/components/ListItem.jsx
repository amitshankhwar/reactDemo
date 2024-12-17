import React from "react";

const ListItem = ({ item, idx }) => {
  return <>{idx <= 9 ? <li>{item.body}</li> : <></>}</>;
};

export default ListItem;
