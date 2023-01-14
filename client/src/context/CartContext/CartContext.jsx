import { createContext, useContext, useState } from "react";
import Cart from "../../components/Cart/Cart";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// Crea el contexto del carrito
export const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

// Crea un componente que proporciona el contexto del carrito
export const CartProvider = ({ children }) => {
  // Carrito de compras
  const [cart, setCart] = useLocalStorage(
    "shopping-cart",
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  // La cantidad total de productos en el carrito
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Métodos para manipular el carrito

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  function incrementItemQuantity(id) {
    setCart((currItems) => {
      if (cart.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decrementItemQuantity(id) {
    setCart((currItems) => {
      if (cart.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  // Proporciona el estado y los métodos del carrito como valor del contexto
  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
};
