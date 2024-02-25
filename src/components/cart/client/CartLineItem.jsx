import { CustomerRating } from '@/components/ui/server';
import { useProduct } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { RotatingLines } from 'react-loader-spinner';
import { IoMdClose } from 'react-icons/io';
import { useContext, useState } from 'react';
import { cartContext } from '@/contexts';
import { useAddToCart } from '@/hooks/cart/useAddToCart';
import { useRemoveFromCart } from '@/hooks/cart/useRemoveFromCart';
import { IoIosRemoveCircle } from 'react-icons/io';
import { IoIosAddCircle } from 'react-icons/io';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { useCartActions } from '@/hooks/cart';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);
  const { removeFromCart: deleteProduct } = useContext(cartContext);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [isRemoved, setIsRemoved] = useState(false);

  const removeProduct = () => {
    setIsRemoved(true);
    deleteProduct(productId);
  };

  const { addToCart, removeFromCart } = useCartActions();

  if (isRemoved) {
    return null;
  }

  const addItem = () => {
    addToCart(productId);
    setNewQuantity((quantity) => {
      return quantity + 1;
    });
  };

  const removeItem = () => {
    removeFromCart(productId);
    setNewQuantity((quantity) => {
      return quantity - 1;
    });
  };

  if (loading) {
    return (
      <tr className="text-center">
        <td className="text-center">
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

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, price, image: imageSrc, rating } = fullProduct;

  return (
    <>
      <tr>
        <td className="border-b pr-2">
          <button
            type="button"
            title="Remove product"
            className="text-2xl"
            onClick={removeProduct}
          >
            <IoMdClose></IoMdClose>
          </button>
        </td>

        <td className="py-4 px-2 border-b">
          <Link href={`/products/${productId}`} title={`${title} page`}>
            <Image
              width={100}
              height={100}
              src={imageSrc}
              alt={`Image for product ${title}`}
              className={`inline object-contain w-full h-full min-h-16 min-w-16`}
            ></Image>
          </Link>
        </td>

        <td className="border-b pb-4 px-2 ">
          <Link href={`/products/${productId}`} title={`${title} page`}>
            <h1>{title}</h1>
          </Link>
          <div className="flex items-center gap-4 text-2xl mt-4">
            <CustomerRating rating={fullProduct.rating}></CustomerRating>
            <span className="text-base">{`${Math.floor(
              rating.rate,
            )} Stars`}</span>
          </div>
        </td>

        <td className="border-b pb-4 px-2 ">${price}</td>

        <td className="border-b pb-4 px-2 ">
          <div className="inline-flex justify-between items-center">
            <button
              type="button"
              className="transition-colors hover:text-[var(--accent1)] text-lg"
              title={newQuantity < 2 ? 'Remove product' : 'Remove one item'}
              onClick={newQuantity < 1 ? removeProduct : removeItem}
            >
              {newQuantity < 2 ? (
                <BiSolidTrashAlt></BiSolidTrashAlt>
              ) : (
                <IoIosRemoveCircle></IoIosRemoveCircle>
              )}
            </button>

            <span className="inline-block mx-4">{newQuantity}</span>

            <button
              title="add item"
              type="button"
              onClick={addItem}
              className="transition-colors hover:text-[var(--accent1)] text-lg"
            >
              <IoIosAddCircle></IoIosAddCircle>
            </button>
          </div>
        </td>

        <td className="border-b pb-4 px-2 ">
          {(price * newQuantity).toFixed(2)}
        </td>
      </tr>
    </>
  );
};
