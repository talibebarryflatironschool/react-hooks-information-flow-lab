import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;




// import React from "react";

// function Item({ name, category, inCart, onToggleCart }) {
//   return (
//     <li className={inCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button 
//         onClick={() => onToggleCart(name)} 
//         className={inCart ? "remove" : "add"}
//       >
//         {inCart ? "Remove From Cart" : "Add to Cart"}
//       </button>
//     </li>
//   );
// }

// export default Item;
