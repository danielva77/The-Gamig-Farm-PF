import { createContext, useContext, useState, useEffect } from "react";

// Crea el contexto del carrito
export const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

// Crea un componente que proporciona el contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado del carrito
  const [cart, setCart] = useState(() => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  
  

  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  

  // Métodos para manipular el carrito
  const addToCart = (item) => setCart([...cart, item]);
  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
      localStorage.removeItem("cart");
    
};

//vaciar el carrito
const clearAllCart  = () => {
  setCart([]);
  localStorage.clear()
};


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
      localStorage.setItem("cart", JSON.stringify(cart))
    } else {
      // Si el ítem no existe, agrega uno nuevo con cantidad 1 al carrito
      addToCart({ ...item, quantity: 1 });
      console.log(item)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  };
  const decrementItemQuantity = (id) => {
    // Encuentra el ítem en el carrito
    const item = cart.find((item) => item.id === id);
    if (item) {
      // Si el ítem existe, disminuye su cantidad
      item.quantity--;
      // Si la cantidad del ítem llega a cero, pero hay mas de un item en el carrito, elimínalo del carrito
      if (item.quantity === 0 && cart.length >= 1) {
        removeFromCart(id);
        localStorage.setItem("cart", JSON.stringify(cart))
      } else {
        // Si la cantidad del ítem es mayor a cero, actualiza el estado del carrito
        // Si es igual a cero y solo hay un item en el carrito, no lo elimina
        setCart([...cart]);
        localStorage.setItem("cart", JSON.stringify(cart))
      }
    }
  };


  // Proporciona el estado y los métodos del carrito como valor del contexto
  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        clearAllCart,
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