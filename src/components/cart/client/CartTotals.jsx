import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const expresShipping = 49.0;

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

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

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <div>
        <header className="bg-zinc-400 text-white py-4 block w-full px-2 uppercase font-medium">
          <h1>Cart Totals</h1>
        </header>

        <div className="text-neutral-900 border-b py-3">Subtotal:</div>

        <div className="text-neutral-900 border-b py-3 flex gap-3">
          <span>Shipping:</span>
          <div className="flex flex-col gap-3">
            <div>
              <input type="radio" name="shipping" id="standardShipping" />
              <label htmlFor="standardShipping">Standard (Free)</label>
            </div>

            <div>
              <input type="radio" name="shipping" id="expresShipping" />
              <label htmlFor="expresShipping">
                Express (${expresShipping}.00)
              </label>
            </div>
          </div>
        </div>

        <div className="text-neutral-900 border-b py-3">Total: {total}</div>
      </div>
    </>
  );
};
