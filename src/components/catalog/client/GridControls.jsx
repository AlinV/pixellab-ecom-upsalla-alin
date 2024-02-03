import { uiContext } from '@/contexts';
import { useContext } from 'react';
import { PiNumberSquareOneFill } from 'react-icons/pi';
import { PiNumberSquareTwoFill } from 'react-icons/pi';
import { PiNumberSquareFourFill } from 'react-icons/pi';

const buttonClasses =
  'flex justify-center items-center border border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900 hover:text-white rounded-md';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="hidden lg:flex text-3xl">
      <li>
        <button
          type="button"
          title="One product per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1' ? 'bg-neutral-900 text-white' : ''
          } `}
          onClick={() => {
            setItemsPerRow('1');
          }}
        >
          <PiNumberSquareOneFill></PiNumberSquareOneFill>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two product per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2');
          }}
        >
          <PiNumberSquareTwoFill></PiNumberSquareTwoFill>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four product per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4');
          }}
        >
          <PiNumberSquareFourFill></PiNumberSquareFourFill>
        </button>
      </li>
    </ul>
  );
};
