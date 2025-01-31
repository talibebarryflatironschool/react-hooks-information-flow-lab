import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter.js"
function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
       <Filter onCategoryChange = {handleCategoryChange}/>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;





// import React, { useState } from "react";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [cartItems, setCartItems] = useState([]);

//   // Handle category filter
//   function handleCategoryChange(category) {
//     setSelectedCategory(category);
//   }

//   // Handle adding/removing items from cart
//   function handleToggleCart(itemName) {
//     setCartItems((prevCart) =>
//       prevCart.includes(itemName)
//         ? prevCart.filter((item) => item !== itemName)
//         : [...prevCart, itemName]
//     );
//   }

//   // Filter items based on category
//   const filteredItems = items.filter(
//     (item) => selectedCategory === "All" || item.category === selectedCategory
//   );

//   return (
//     <div className="ShoppingList">
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul>
//         {filteredItems.map((item) => (
//           <Item
//             key={item.id}
//             name={item.name}
//             category={item.category}
//             inCart={cartItems.includes(item.name)}
//             onToggleCart={handleToggleCart}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
