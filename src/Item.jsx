import React, { useState } from "react";

function Item(props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="item-wrapper">
      <div
        className="item-container"
        style={{
          backgroundColor: isSelected ? "yellow" : "#b5f5ec",
        }}
      >
        {props.isNew && <div className="new">NEW</div>}
        <div>{props.name}</div>
        <div>{props.price.toLocaleString()}₫</div>
        <button onClick={() => setIsSelected(!isSelected)}>Thêm vào giỏ</button>
      </div>
    </div>
  );
}

export default Item;
