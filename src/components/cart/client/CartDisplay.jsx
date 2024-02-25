import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { LoadingSpinner } from '@/components/ui/client';
import { CartLineItem } from '.';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  // insert loader style as homework
  if (loading) {
    //  please add spinner
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (cartProducts.length === 0) {
    return (
      <div className="h-full flex justify-center items-center text-neutral-900 text-2xl">
        Your cart is empty.
      </div>
    );
  }

  return (
    <table className="border-separate border-spacing-y-4 ">
      <thead>
        <tr className="uppercase">
          <th className="border-b"></th>
          <th className="border-b"></th>
          <th className="border-b pb-4 px-2 font-normal">Product</th>
          <th className="border-b pb-4 px-2 font-normal text-start">Price</th>
          <th className="border-b pb-4 px-2 font-normal">Quantity</th>
          <th className="border-b pb-4 px-2 font-normal">Total</th>
        </tr>
      </thead>

      <tbody className="text-neutral-900">
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
