import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { FaHome } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
// consider jsx is a normal data type

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4 mx-auto container relative z-20">
      {/* forced example */}
      <Link
        href="/"
        title="Home"
        className="relative z-20 lg:hover:text-[var(--accent1)]"
      >
        <FaHome size={32}></FaHome>
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex flex-col gap-3 z-20">
        <li className="lg:hover:text-[var(--accent1)]">
          <Link
            href="https://www.facebook.com"
            title="Check out our Facebook page"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook size={28}></FaSquareFacebook>
          </Link>
        </li>

        <li className="lg:hover:text-[var(--accent1)]">
          <Link
            href="https://www.instagram.com"
            title="Check out our Instagram page"
            target="blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={28}></BsInstagram>
          </Link>
        </li>

        <li className="lg:hover:text-[var(--accent1)]">
          <Link
            href="www.facebook.com"
            title="Check out our Twitter page"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={28}></FaSquareXTwitter>
          </Link>
        </li>
      </ul>
    </div>
  );
};
