import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

export const CartControls = () => {
  const obj = useContext(cartContext);

  return (
    <ul className="border border-zinc-200 w-20 h-20 box-border transition-colors hover:bg-neutral-900 hover:text-white group rounded-md">
      <li className="h-full">
        <Link href="/cart" className=" flex justify-center items-center h-full">
          <span className="relative ">
            {/* Cart - add react icon */}
            <span className="absolute block min-w-5 px-1 -top-2 -right-2 bg-neutral-900 text-white group-hover:bg-white group-hover:text-neutral-900 rounded-md text-sm text-center">
              1
            </span>
            <span className="text-3xl">
              <RiShoppingCartLine></RiShoppingCartLine>
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
