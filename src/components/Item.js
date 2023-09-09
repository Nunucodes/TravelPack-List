import React from "react";

const Item = ({ item, onDeleteItems, onToggleItem }) => {
  const handleDelete = () => {
    onDeleteItems(item.id);
  };
  const onHandleToggle = () => {
    onToggleItem(item.id);
  };
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={onHandleToggle} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
};

export default Item;
