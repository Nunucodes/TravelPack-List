import React from "react";
import InitialItems from "./Data";
import Item from "./Item";

const PackingList = ({ items, onDeleteItems, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
