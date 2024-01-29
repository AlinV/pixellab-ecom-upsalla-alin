import { IoStarSharp } from 'react-icons/io5';

export const StarRating = () => {
  const stars = Array(5).fill();

  return (
    <ul className="flex gap-1 justify-center">
      {stars.map((index) => {
        return (
          <>
            <li key={index}>
              <IoStarSharp></IoStarSharp>
            </li>
          </>
        );
      })}
    </ul>
  );
};
