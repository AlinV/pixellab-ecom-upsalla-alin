import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CartTotalProducts } from '.';

export const CartControls = () => {
  const obj = useContext(cartContext);

  return (
    <ul className="border border-zinc-200 w-20 h-20 box-border transition-colors hover:bg-neutral-900 hover:text-white group rounded-md">
      <li className="h-full">
        <Link href="/cart" className=" flex justify-center items-center h-full">
          <span className="relative ">
            <CartTotalProducts></CartTotalProducts>

            <span className="text-3xl">
              <RiShoppingCartLine></RiShoppingCartLine>
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
