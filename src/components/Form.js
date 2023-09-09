import React from "react";
import { useState } from "react";

const Form = ({ onHandleItems }) => {
  const [description, setDescription] = useState("");
  const [itemAmout, setItemAmount] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(itemAmout, description);
    if (!description) return alert("Enter a valid item");
    const newItem = {
      description: description,
      quantity: itemAmout,
      packed: false,
      id: Date.now(),
    };

    onHandleItems(newItem);

    console.log(newItem);
    setDescription("");
    setItemAmount(1);
  };
  const handleItem = (event) => {
    setDescription(event.target.value);
  };
  const handleItemAmount = (event) => {
    setItemAmount(event.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip?</h3>
      <select value={itemAmout} onChange={handleItemAmount}>
        {/* Understand this logic */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleItem}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
