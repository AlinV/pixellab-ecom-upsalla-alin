import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';
import { CartTotalProducts } from '.';
import { RotatingLines } from 'react-loader-spinner';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  // insert loader style as homework
  if (loading) {
    //  please add spinner
    return (
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
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

      <tfoot className="text-neutral-900 text-lg font-medium">
        <CartTotalProducts></CartTotalProducts>
      </tfoot>
    </table>
  );
};
