import { useAddToCart } from './useAddToCart';
import { useRemoveFromCart } from './useRemoveFromCart';

export const useCartActions = () => {
  const { addToCart, loading: adding } = useAddToCart();
  const { removeFromCart, loading: removing } = useRemoveFromCart();

  return { addToCart, adding, removeFromCart, removing };
};
