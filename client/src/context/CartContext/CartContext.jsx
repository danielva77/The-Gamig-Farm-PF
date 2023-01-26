import { createContext, useContext, useState, useEffect } from "react";
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
  // Estado del carrito
  const [cart, setCart] = useState(() => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  
const quantity = cart.reduce((total, item) => total + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  // La cantidad total de productos en el carrito
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Métodos para manipular el carrito

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const addToCart = (item) => setCart([...cart, item]);
  
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//       localStorage.removeItem("cart");
    
// };

//vaciar el carrito
const clearAllCart  = () => {
  setCart([]);
  // localStorage.clear()
};


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

  const addItem = (item) => {
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
        cart,
        quantity,
        clearAllCart,
        addToCart,
        addItem,
        removeFromCart,
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