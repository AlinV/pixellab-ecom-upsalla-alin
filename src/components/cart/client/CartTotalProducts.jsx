import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const CartTotalProducts = () => {
  const { products, loading } = useProducts();
  const { cartProducts } = useContext(cartContext);

  if (loading) {
    return (
      <RotatingLines
        visible={true}
        height="20"
        width="20"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  const totalProducts = cartProducts.reduce(
    (total, { quantity, productId }) => {
      products.find((product) => {
        return productId === product.id;
      });

      total += quantity;

      return total;
    },
    0,
  );

  return (
    <span className="absolute block min-w-5 px-1 -top-2 -right-2 bg-neutral-900 text-white group-hover:bg-white group-hover:text-neutral-900 rounded-md text-sm text-center">
      {totalProducts}
    </span>
  );
};
