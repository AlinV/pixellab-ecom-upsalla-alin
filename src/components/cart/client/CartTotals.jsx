import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const expressShipping = 49.0;

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();
  const [selectedOption, setSelectedOption] = useState('standardShipping');

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

  const optionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const finalTotal =
    selectedOption === 'expressShipping' ? total + expressShipping : total;

  return (
    <>
      <div>
        <header className="bg-zinc-400 text-white py-4 block w-full px-2 uppercase font-medium">
          <h1>Cart Totals</h1>
        </header>

        <div className="text-neutral-900 border-b py-3">Subtotal: {total}</div>

        <div className="text-neutral-900 border-b py-3 flex gap-3">
          <span>Shipping:</span>
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="radio"
                name="shipping"
                id="standardShipping"
                value="standardShipping"
                onChange={optionChange}
                checked={selectedOption === 'standardShipping'}
                disabled={total > 0 ? false : true}
              />
              <label htmlFor="standardShipping">Standard (Free)</label>
            </div>

            <div>
              <input
                type="radio"
                name="shipping"
                id="expressShipping"
                value="expressShipping"
                onChange={optionChange}
                checked={selectedOption === 'expressShipping'}
                disabled={total > 0 ? false : true}
              />
              <label htmlFor="expressShipping">
                Express (${expressShipping}.00)
              </label>
            </div>
          </div>
        </div>

        <div className="text-neutral-900 border-b py-3">
          Total:
          {selectedOption === 'standardShipping'
            ? total.toFixed(2)
            : finalTotal.toFixed(2)}
        </div>

        <button
          type="button"
          title="Proceed to Checkout"
          className={
            total > 0
              ? 'bg-black text-white transition-colors hover:bg-[var(--accent1)] uppercase text-center font-semibold w-full py-4 mt-10'
              : 'bg-gray-400 text-white uppercase text-center font-semibold w-full py-4 mt-10'
          }
          disabled={total > 0 ? false : true}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};
