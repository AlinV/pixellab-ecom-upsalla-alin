import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10 lg:hover:text-[var(--accent1)]"
      >
        <CgMenu size={32}></CgMenu>
      </button>

      <nav
        className={`${
          open
            ? 'translate-y-full translate-x-0 lg:translate-x-full lg:translate-y-0'
            : ''
        } bg-neutral-900 transform-gpu transition-transform duration-500 text-white w-dvw h-dvh fixed left-0 -top-full lg:top-0 lg:-left-1/3 z-0 lg:w-1/3 lg:pl-36`}
      >
        <ul className="flex flex-col gap-4 justify-center lg:items-start items-center text-2xl leading-10 font-medium h-full uppercase">
          <li className="lg:hover:text-[var(--accent1)]">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li className="lg:hover:text-[var(--accent1)]">
            <Link href="/contact" title="Contact">
              Contact
            </Link>
          </li>

          <li className="lg:hover:text-[var(--accent1)]">
            <Link href="/" title="About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
