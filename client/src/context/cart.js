import React from "react";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.regularPrice);
    }, 0);


    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);

    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
  }, [cart]);


  const removeItem = React.useCallback((id) => {
    setCart([...cart].filter(item => item.id !== id));
  }
  )
  
  const increaseAmount = (id) => {
    const newCart = [...cart].map(item => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  }
  


  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const newCart = [...cart].map(item => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  }
  
  const addToCart = React.useCallback((book) => {
    const { id, image, by, bookName,regularPrice } = book;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, image, by, bookName, regularPrice, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  })
  const clearCart = React.useCallback(() => {
    setCart([]);
  }
  )

const myCartContextValue= React.useMemo(()=>({
  cart,
  cartItems,
  total,
  removeItem,
  increaseAmount,
  decreaseAmount,
  addToCart,
  clearCart
}),[cart,
  cartItems,
  total,
  removeItem,
  increaseAmount,
  decreaseAmount,
  addToCart,
  clearCart])
  return (
    <CartContext.Provider
      value={myCartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };