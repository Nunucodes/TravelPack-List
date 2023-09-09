import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start packing your load🧳</em>
      </footer>
    );

  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter((item) => item.packed).length;
  const percentageOfItems = Math.round(
    (numberOfPackedItems / numberOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {percentageOfItems === 100
          ? "You are done and ready to go ✈️"
          : ` You have ${numberOfItems} items on your list, and you already packed
        ${numberOfPackedItems}(${percentageOfItems}%)`}
      </em>
    </footer>
  );
};

export default Stats;
