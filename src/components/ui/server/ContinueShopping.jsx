import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export const ContinueShopping = () => {
  return (
    <Link
      href="/products"
      title="Back to Shop"
      className="flex gap-5 items-center border border-zinc-200 rounded-md px-2 lg:hover:bg-neutral-900 lg:hover:text-white"
    >
      <IoIosArrowBack></IoIosArrowBack> Back to Shop
    </Link>
  );
};
