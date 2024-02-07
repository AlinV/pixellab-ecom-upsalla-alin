import { css } from '@emotion/css';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { CustomerRating } from '@/components/ui/server';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;

  const gridHeader = css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  `;

  return (
    <article className="text-center flex flex-col justify-between px-10 lg:px-20 h-full">
      <header className={` grid ${gridHeader} items-center h-full`}>
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
            className="inline"
            objectFit="contain"
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
    </article>
  );
};
