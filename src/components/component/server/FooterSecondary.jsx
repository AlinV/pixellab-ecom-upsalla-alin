import { PiTrademarkBold } from 'react-icons/pi';

export const FooterSecondary = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className="flex items-center gap-2">
        <PiTrademarkBold></PiTrademarkBold> {currentYear}. Created by Alin Voicu
      </p>
    </>
  );
};
