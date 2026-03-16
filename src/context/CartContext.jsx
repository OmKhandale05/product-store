import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    try {
        return storedCart ? JSON.parse(storedCart) : [];
      } catch (error) {
        console.error("Invalid cart data in localStorage");
        return [];
      }
  });

  useEffect(() => {
    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {

    setCartItems((prevCart) => {

      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        toast.info("Quantity updated", {
          toastId: `update-${product.id}`
        });
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success("Product added to cart",{
        toastId: `add-${product.id}`
      });

      return [...prevCart, { ...product, quantity: 1 }];
    });

  };

  const removeFromCart = (id) => {
    toast.error("Product removed", {
      toastId: `remove-${id}`
    });
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
