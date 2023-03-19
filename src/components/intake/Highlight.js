import React from "react";

function Highlight({ items, deleteItem }) {
  return (
    <div className="highlight">
      {items.map((item) => {
        return (
          <div className="highlight-item" key={item.id}>
            <span>{item.text}</span>
            <button
              type="button"
              onClick={() => {
                deleteItem(item.id);
              }}
            ></button>
          </div>
        );
      })}
    </div>
  );
}

export default Highlight;
