import { css } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import { CustomerRating } from '@/components/ui/server';
import { AddToCart } from '@/components/cart/client';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;

  const gridArticle = css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
    row-gap: 10px;
  `;

  return (
    <article className={`text-center ${gridArticle} px-10 lg:px-20 h-full bg-`}>
      <header className="h-full">
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
            className="inline object-contain w-52 h-52"
            priority
          ></Image>
        </Link>

        <h1 className="mt-12 uppercase text-lg">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section className="flex flex-col gap-4">
        <span className="text-lg">${price}</span>
        <div className="text-xl">
          <CustomerRating rating={product.rating}></CustomerRating>
        </div>
      </section>

      <footer>
        <AddToCart product={product}></AddToCart>
      </footer>
    </article>
  );
};
