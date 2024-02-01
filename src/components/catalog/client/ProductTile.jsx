import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';
import { MdOutlineStarHalf } from 'react-icons/md';
import { css } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id, rating } = product;
  const starsNumber = 5;

  const productUrl = `/products/${id}`;

  const gridHeader = css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    @media (min-width: 1537px) {
      grid-template-rows: 2fr 1fr;
    }
  `;

  const customerRating = (rating) => {
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
        <span className="text-xs">({rating.count} evaluări)</span>
      </>
    );
  };

  return (
    <article className="text-center flex flex-col gap-4 justify-between px-10 lg:px-20 h-full">
      <header className={`mb-4 grid ${gridHeader} items-center h-full`}>
        <Link
          href={productUrl}
          title={title}
          className="flex items-center justify-center"
        >
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            objectFit="contain"
            className="inline"
            priority
          ></Image>
        </Link>

        <h1 className="mt-12">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section className="flex flex-col gap-4">
        ${price}
        {customerRating(rating)}
      </section>
    </article>
  );
};
