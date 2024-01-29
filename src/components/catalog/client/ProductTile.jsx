import { StarRating } from '@/components/ui/server';
import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;
  const productUrl = `/product/${id}`;

  return (
    <article className="text-center">
      <header>
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            objectFit="contain"
            className="inline"
          ></Image>
        </Link>

        <h1>
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section>{price}</section>

      <footer>
        {/* add to cart homework */}
        <StarRating></StarRating>
      </footer>
    </article>
  );
};
