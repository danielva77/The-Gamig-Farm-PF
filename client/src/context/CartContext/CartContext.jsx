import { createContext, useContext, useState } from "react";

// Crea el contexto del carrito
export const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

// Crea un componente que proporciona el contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado del carrito
  const [cart, setCart] = useState([]);

  const quantity = cart.reduce((quantity, item) => item.quantity + quantity, 0);

  // Métodos para manipular el carrito
  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const getItemQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };
  const incrementItemQuantity = (item) => {
    // Encuentra el ítem en el carrito
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Si el ítem existe, incrementa su cantidad y actualiza el estado del carrito
      existingItem.quantity++;
      setCart([...cart]);
    } else {
      // Si el ítem no existe, agrega uno nuevo con cantidad 1 al carrito
      addToCart({ ...item, quantity: 1 });
    }
  };
  const decrementItemQuantity = (id) => {
    // Encuentra el ítem en el carrito
    const item = cart.find((item) => item.id === id);
    if (item) {
      // Si el ítem existe, disminuye su cantidad
      item.quantity--;
      // Si la cantidad del ítem llega a cero, elimínalo del carrito
      if (item.quantity === 0) {
        removeFromCart(id);
      } else {
        // Si la cantidad del ítem es mayor a cero, actualiza el estado del carrito
        setCart([...cart]);
      }
    }
  };

  // Proporciona el estado y los métodos del carrito como valor del contexto
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getItemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
