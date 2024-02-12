import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const CartTotalProducts = () => {
  const { products, loading } = useProducts();
  const { cartProducts } = useContext(cartContext);

  if (loading) {
    return (
      <tr>
        <td>
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
        </td>
      </tr>
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
    <tr>
      <td className="border-b"></td>

      <td className="border-b"></td>

      <td className="border-b">
        <h1>Total products in cart:</h1>
      </td>

      <td className="border-b"></td>

      <td className="text-center border-b py-4">{totalProducts}</td>

      <td className="border-b"></td>
    </tr>
  );
};
