import { CustomerRating } from '@/components/ui/server';
import { useProduct } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { RotatingLines } from 'react-loader-spinner';
import { IoMdClose } from 'react-icons/io';
import { useContext, useState } from 'react';
import { cartContext } from '@/contexts';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);
  const { removeFromCart } = useContext(cartContext);

  const [isRemoved, setIsRemoved] = useState(false);

  const removeProduct = () => {
    setIsRemoved(true);
    removeFromCart(product.productId);
  };

  if (isRemoved) {
    return null;
  }

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
        <td className="border-b">
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

        <td className="text-center border-b pb-4 px-2 ">{quantity}</td>

        <td className="border-b pb-4 px-2 ">{price * quantity}</td>
      </tr>
    </>
  );
};
