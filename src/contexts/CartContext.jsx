import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  const { cartProducts, loading, error, setCartProducts } = useCart(2);

  const removeFromCart = (productId) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.productId !== productId,
    );
    setCartProducts(updatedCartProducts);
  };

  return (
    <cartContext.Provider
      value={{ cartProducts, loading, error, setCartProducts, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
