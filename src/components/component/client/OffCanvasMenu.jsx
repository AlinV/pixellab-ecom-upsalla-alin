import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10"
      >
        <CgMenu size={32}></CgMenu>
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-neutral-900 transform-gpu transition-transform text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3`}
      >
        <ul className="flex justify-center items-center h-full">
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
