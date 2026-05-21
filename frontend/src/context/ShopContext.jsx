import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});
  const addToCart = (product, size) => {
  console.log("Adding product:", product);

  setCartItems((prev) => {
    const updated = [
      ...prev,
      {
        ...product,
        selectedSize: size,
        quantity: 1,
      },
    ];

    console.log("Updated cart:", updated);

    return updated;
  });
};

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };
  useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
}, [cartItems]);
const increaseQuantity = (id, size) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === id &&
      item.selectedSize === size
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (id, size) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item._id === id &&
        item.selectedSize === size
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;