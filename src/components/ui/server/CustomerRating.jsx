import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';
import { MdOutlineStarHalf } from 'react-icons/md';

export const CustomerRating = ({ rating }) => {
  const starsNumber = 5;
  const fullStars = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 > 0.5 ? 1 : 0;
  const emptyStars = starsNumber - fullStars - halfStar;

  return (
    <>
      <div className="flex justify-center text-[var(--accent1)]">
        {[...Array(fullStars)].map((_, index) => (
          <MdOutlineStar key={index} />
        ))}
        {halfStar ? <MdOutlineStarHalf key="half-star" /> : ''}
        {[...Array(emptyStars)].map((_, index) => (
          <MdOutlineStarBorder key={`empty-star-${index}`} />
        ))}
      </div>
      <span className="text-base order-2">({rating.count} reviews)</span>
    </>
  );
};
