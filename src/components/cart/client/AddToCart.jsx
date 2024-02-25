import { LoadingSpinner } from '@/components/ui/client';
import { cartContext } from '@/contexts';
import { useCartActions } from '@/hooks/cart';
import { useContext } from 'react';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, adding, removeFromCart, removing } = useCartActions();
  const { cartProducts } = useContext(cartContext);
  let cartQuantity = 0;

  const cartProduct = cartProducts.find(({ productId }) => {
    return id === productId;
  });

  if (cartProduct) {
    cartQuantity = cartProduct.quantity;
  }

  const isProductInCart = !!cartProduct;

  const onClick = () => {
    isProductInCart ? removeFromCart(id, cartQuantity) : addToCart(id);
  };

  const busy = adding || removing;
  return (
    <button
      type="button"
      className="uppercase px-6 py-3 bg-neutral-900 inline-flex justify-center text-white hover:bg-[var(--accent1)] text-sm font-medium"
      disabled={busy}
      title={
        isProductInCart ? `Remove ${title} from cart` : `Add ${title} to cart`
      }
      onClick={onClick}
    >
      {busy ? (
        <LoadingSpinner></LoadingSpinner>
      ) : isProductInCart ? (
        'Remove from Cart'
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};
