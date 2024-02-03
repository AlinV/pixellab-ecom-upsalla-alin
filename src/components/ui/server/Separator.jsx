import { BackToTop } from '../client';

export const Separator = ({ children }) => {
  return (
    <div className="border-t border-t-neutral-400 relative my-5 z-0">
      <BackToTop></BackToTop>
    </div>
  );
};
