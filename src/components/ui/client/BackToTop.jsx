import { useEffect } from 'react';
import { PiCaretCircleUpBold } from 'react-icons/pi';

export const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-5xl bg-[var(--gray)] text-[var(--accent3)] px-2 lg:hover:text-[var(--accent1)]"
    >
      <PiCaretCircleUpBold></PiCaretCircleUpBold>
    </button>
  );
};
